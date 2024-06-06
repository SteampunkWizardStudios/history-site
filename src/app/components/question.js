"use client";

import styles from "../styles/homestyle.module.css";
import React, { useState } from 'react';

export default function Home() {
  const [students, setStudents] = useState('youths');
  const [history, setHistory] = useState('identity');

  const toggleStudents = () => {
    setStudents(students === 'youths' ? 'students' : 'youths');
  };

  const toggleHistory = () => {
    setHistory(history === 'identity' ? 'history' : 'identity');
  };

  return (
  <>
    <div className={styles.question}>
      How have <span className={styles.highlight} onClick={toggleStudents}>{students}</span>{" "}
      contributed to our American{" "}
      <span className={styles.highlight} onClick={toggleHistory}>{history}</span>?
    </div>
  </>
);
}