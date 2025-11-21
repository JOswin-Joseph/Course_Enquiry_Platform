// src/pages/Signup.jsx

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { useToast } from "../hooks/useToast";
import { signupSchema } from "../utils/validators";
import { setPageTitle } from "../utils/helpers";
import PageTransition from "../components/layout/PageTransition";
import styles from "./Login.module.css";

import { signupUser, setAuthData } from "../services/auth";

export default function Signup() {
  const { success, error } = useToast();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  useEffect(() => setPageTitle("Sign Up"), []);

  // Autofill sync
  useEffect(() => {
    const sync = () => {
      const fields = ["name", "email", "password", "confirmPassword"];
      fields.forEach((field) => {
        const el = document.querySelector(`input[name="${field}"]`);
        if (el?.value) setValue(field, el.value);
      });
    };
    sync();
    const t = setTimeout(sync, 300);
    return () => clearTimeout(t);
  }, [setValue]);

  // Submit
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await signupUser(data.name, data.email, data.password);

      if (response.error) {
        error(response.error);
        return;
      }

      setAuthData(response.token, response.user);
      success("Account created successfully!");
      navigate("/user/dashboard", { replace: true });

    } catch {
      error("Signup failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className={styles.page}>
        <div className={styles.backdrop} aria-hidden />

        <motion.main
          className={styles.cardWrap}
          initial={{ opacity: 0, y: 12, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
          role="main"
          aria-labelledby="signup-title"
        >
          <header className={styles.header}>
            <div className={styles.logoCircle}>
              <UserPlus size={28} />
            </div>
            <h1 id="signup-title" className={styles.title}>
              Create an account
            </h1>
            <p className={styles.subtitle}>
              Start your learning journey with Coursify
            </p>
          </header>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>

            {/* Full Name */}
            <div className={styles.field}>
              <div className={styles.fieldInner}>
                <span className={styles.leftIcon}><User size={14} /></span>
                <input
                  placeholder=" "
                  {...register("name", { required: true })}
                  className={`${styles.input} ${errors.name ? styles.err : ""}`}
                />
                <label className={styles.flabel}>Full name</label>
              </div>
              {errors.name && <div className={styles.error}>{errors.name.message}</div>}
            </div>

            {/* Email */}
            <div className={styles.field}>
              <div className={styles.fieldInner}>
                <span className={styles.leftIcon}><Mail size={14} /></span>
                <input
                  placeholder=" "
                  {...register("email", { required: true })}
                  className={`${styles.input} ${errors.email ? styles.err : ""}`}
                />
                <label className={styles.flabel}>Email address</label>
              </div>
              {errors.email && <div className={styles.error}>{errors.email.message}</div>}
            </div>

            {/* Password */}
            <div className={styles.field}>
              <div className={styles.fieldInner}>
                <span className={styles.leftIcon}><Lock size={14} /></span>
                <input
                  placeholder=" "
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  className={`${styles.input} ${errors.password ? styles.err : ""}`}
                />
                <label className={styles.flabel}>Password</label>

                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <div className={styles.error}>{errors.password.message}</div>}
            </div>

            {/* Confirm Password */}
            <div className={styles.field}>
              <div className={styles.fieldInner}>
                <span className={styles.leftIcon}><Lock size={14} /></span>
                <input
                  placeholder=" "
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword", { required: true })}
                  className={`${styles.input} ${errors.confirmPassword ? styles.err : ""}`}
                />
                <label className={styles.flabel}>Confirm password</label>
              </div>
              {errors.confirmPassword && (
                <div className={styles.error}>{errors.confirmPassword.message}</div>
              )}
            </div>

            {/* Button */}
            <div className={styles.actions}>
              <button type="submit" className={styles.primary} disabled={isLoading}>
                {isLoading ? "Creating…" : "Create account"}
              </button>
            </div>
          </form>

          <div className={styles.lower}>
            <div className={styles.orRow}>
              <span className={styles.line} />
              <span className={styles.orText}>or</span>
              <span className={styles.line} />
            </div>
            <p className={styles.signup}>
              Already have an account?
              <Link to="/login" className={styles.link}>Sign in</Link>
            </p>
          </div>

        </motion.main>
      </div>
    </PageTransition>
  );
}
