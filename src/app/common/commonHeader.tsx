'use client'
import React from 'react';
import Image from 'next/image';
import styles from './commonHeader.module.css';

export default function CommonHeader() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_items}>
          < div className={styles.header_hamburger}>
            <Image src='/hamburger_menu.png' width={50} height={60} alt='hamburger_menu' />
          </div >
          <div className={styles.header_logo}>
            <Image src='/logo.png' width={140} height={80} alt='logo' />
          </div>
          <div className={styles.header_search}>
            <Image src='/mushimegane.png' width={30} height={80} alt='logo' />
            <input type='text' id={styles.searchform} placeholder='サークル検索（例:卓球、野球）' />
            <input type='button' value='検索' id={styles.seachButton} />
          </div>
          <div className={styles.header_button1}>
            <a className={styles.button_circleList}>サークル一覧</a>
          </div>
        </div>
        <div className={styles.header_buttons}>
          <div className={styles.header_button2}>
            <a className={styles.button_text}>ログイン</a>
          </div>
          <div className={styles.header_button3}>
            <a className={styles.button_text}>新規登録</a>
          </div>
        </div>
      </div>
    </>
  );
}
