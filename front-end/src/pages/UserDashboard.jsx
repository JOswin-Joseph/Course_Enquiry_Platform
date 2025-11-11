import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageSquare, Mail } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import { useAuth } from "../context/AuthContext";
import { setPageTitle } from '../utils/helpers';
import styles from './Dashboard.module.css';

const UserDashboard = () => {
  const { user } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => setPageTitle("Dashboard"), []);

  useEffect(() => {
    fetch("http://localhost:3000/api/enquiry/my-enquiries", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setEnquiries(data))
      .catch((err) => console.error("Error fetching enquiries:", err))
      .finally(() => setLoading(false));
  }, []);

  const stats = [
    { icon: <BookOpen size={24} />, label: 'Courses Enrolled', value: enquiries.length },
    { icon: <MessageSquare size={24} />, label: 'Active Enquiries', value: enquiries.length },
    { icon: <Mail size={24} />, label: 'Messages', value: '5' },
  ];

  return (
    <PageTransition>
      <div className={styles.dashboard}>
        <div className="container">

          <div className={styles.header}>
            <h1>Welcome back, {user?.name}!</h1>
            <p>Here’s what's happening with your learning journey</p>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statValue}>{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enquiry Table */}
          <div className={styles.section}>
            <h2>My Enquiries</h2>

            {loading ? (
              <p>Loading...</p>
            ) : enquiries.length === 0 ? (
              <p>No enquiries yet. Start exploring courses!</p>
            ) : (
              <div className={styles.table}>
                <table>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enq) => (
                      <tr key={enq.id}>
                        <td>{enq.course}</td>
                        <td>
                          <span className={`${styles.status} ${styles[enq.status]}`}>
                            {enq.status}
                          </span>
                        </td>
                        <td>{new Date(enq.createdAt).toLocaleDateString()}</td>
                        <td>
                          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                            View
                          </button>
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

export default UserDashboard;
