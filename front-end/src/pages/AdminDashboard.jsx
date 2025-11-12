// src/pages/AdminDashboard.jsx

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, TrendingUp, Download } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../hooks/useToast';
import { setPageTitle } from '../utils/helpers';
import styles from './Dashboard.module.css';

const AdminDashboard = () => {
  const { user } = useAuth();
  const { success, error } = useToast();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => setPageTitle("Admin Dashboard"), []);

  // ✅ FETCH ALL ENQUIRIES ON PAGE LOAD
  useEffect(() => {
    fetch("http://localhost:3000/api/enquiry/all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setEnquiries(data))
      .catch(() => error("Failed to load enquiries"))
      .finally(() => setLoading(false));
  }, []);

  // ✅ UPDATE STATUS HANDLER
  const updateStatus = async (id, status) => {
    fetch(`http://localhost:3000/api/enquiry/update-status/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then(() => {
        success(`Status updated to "${status}"`);
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status } : e))
        );
      })
      .catch(() => error("Failed to update status"));
  };

  return (
    <PageTransition>
      <div className={styles.dashboard}>
        <div className="container">

          <div className={styles.header}>
            <div>
              <h1>Admin Dashboard</h1>
              <p>Manage enquiries and monitor platform performance</p>
            </div>
            <button className="btn btn-primary">
              <Download size={20} /> Export CSV
            </button>
          </div>

          {/* Enquiries Table */}
          <div className={styles.section}>
            <h2>Recent Enquiries</h2>

            {loading ? (
              <p>Loading...</p>
            ) : enquiries.length === 0 ? (
              <p>No enquiries found.</p>
            ) : (
              <div className={styles.table}>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enq) => (
                      <tr key={enq.id}>
                        <td>{enq.user?.name}</td>
                        <td>{enq.user?.email}</td>
                        <td>{enq.course}</td>
                        <td>
                          <span className={`${styles.status} ${styles[enq.status]}`}>
                            {enq.status}
                          </span>
                        </td>
                        <td>{new Date(enq.createdAt).toLocaleDateString()}</td>
                        <td>
                          <select
                            value={enq.status}
                            onChange={(e) => updateStatus(enq.id, e.target.value)}
                            className="btn btn-outline"
                          >
                            <option value="pending">Pending</option>
                            <option value="replied">Replied</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminDashboard;
