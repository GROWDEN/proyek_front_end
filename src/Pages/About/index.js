import React from "react";
import { NavLink } from "react-router-dom";
import awan from "../../img/weather.png";

const Homepage = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-title">About Weather Report</h1>
      <img src={awan} alt="Awan" className="welcome-image" />
      <p className="welcome-p">
        Selamat datang di aplikasi cuaca! Aplikasi ini dirancang untuk
        memberikan informasi cuaca yang akurat dan terkini untuk lokasi Anda.
        Dengan menggunakan aplikasi ini, Anda dapat dengan mudah mengetahui
        kondisi cuaca saat ini, perkiraan cuaca harian dan mingguan, suhu,
        kelembaban udara, kecepatan angin, dan banyak lagi. Aplikasi cuaca ini
        menawarkan antarmuka yang sederhana dan mudah digunakan. Anda hanya
        perlu memasukkan lokasi Anda atau menggunakan lokasi saat ini untuk
        mendapatkan informasi cuaca yang relevan. Informasi cuaca yang
        ditampilkan disajikan dengan jelas dan informatif, sehingga Anda dapat
        dengan cepat memahami kondisi cuaca di wilayah Anda. Selain itu,
        aplikasi cuaca ini juga menyediakan fitur tambahan seperti pencarian
        cuaca untuk lokasi lainnya, penandaan lokasi favorit, dan notifikasi
        cuaca yang dapat Anda sesuaikan sesuai kebutuhan. Dengan demikian, Anda
        dapat memantau kondisi cuaca di berbagai tempat yang Anda minati atau
        penting bagi Anda. Aplikasi cuaca ini mengandalkan sumber data cuaca
        yang terpercaya dan terkini, sehingga Anda dapat mempercayai keakuratan
        informasi yang diberikan. Kami terus memperbarui data cuaca secara
        berkala untuk memberikan informasi yang paling akurat dan terkini kepada
        pengguna kami. Selamat menjelajahi aplikasi cuaca ini! Dapatkan
        informasi cuaca terkini dan rinci untuk menjaga Anda selalu siap
        menghadapi berbagai kondisi cuaca. Semoga aplikasi ini memberikan
        manfaat dan memudahkan Anda dalam merencanakan aktivitas sehari-hari
        Anda dengan lebih baik.
      </p>
      <br />
      <NavLink to="/cuaca" activeClassName="active-link">
        <button className="cta-button">Back To Weather</button>
      </NavLink>
    </div>
  );
};

export default Homepage;
