const express = require("express");
const router = express.Router();

const menus = [
  {
    code: "dashboard",
    label: {
      zh_CN: "首页",
      en_US: "Dashboard",
    },
    icon: "dashboard",
    path: "/dashboard",
  },
  {
    code: "permission",
    label: {
      zh_CN: "权限",
      en_US: "Permission",
    },
    icon: "permission",
    path: "/permission",
    children: [
      {
        code: "listPermission",
        label: {
          zh_CN: "路由权限",
          en_US: "Permissions",
        },
        path: "/permission/list",
      },
      {
        code: "notFound",
        label: {
          zh_CN: "404",
          en_US: "404",
        },
        path: "/permission/404",
      },
    ],
  },
];

// eslint-disable-next-line no-unused-vars
const getMenuHandler = async (req, res) => {
  return res.status(200).send({
    status: true,
    result: menus,
  });
};

router.get("/menu", getMenuHandler);
module.exports = router;
