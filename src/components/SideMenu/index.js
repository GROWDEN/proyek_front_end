import React, { useState, useEffect } from "react";
import { HomeFilled, CloudFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/homepage");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        selectedKeys={[activeItem]}
        onClick={(item) => {
          setActiveItem(item.key);
          navigate(item.key);
        }}
        items={[
          {
            label: "Weather",
            icon: <CloudFilled />,
            key: "/cuaca",
          },
          {
            label: "About Us",
            icon: <HomeFilled />,
            key: "/homepage",
          },
          {
            label: "Weather Maps",
            icon: <CloudFilled />,
            key: "",
          },
        ]}
      />
    </div>
  );
}

export default SideMenu;
