interface Stage {
  id: string;
  title: string;
  icon?: string;
  path: string;
  roles: Array<string>;
  enable: boolean;
  children?: Array<Stage>
};

export const stage: Array<Stage> = [
  {
    id: "1",
    title: "控制中心",
    icon: "fund-outlined",
    path: "/term",
    roles: ["root"],
    enable: false,
    children: [
      {
        id: "1-1",
        title: "Nacos",
        path: "/term/nacos",
        roles: ["root"],
        enable: false
      }
    ]
  },
  {
    id: "2",
    title: "用户管理",
    icon: "user-outlined",
    path: "/user",
    roles: ["all"],
    enable: false,
    // children: [
    //   {
    //     id: "2-1",
    //     title: "用户信息",
    //     path: "/user/info",
    //     roles: ["admin"],
    //     enable: false
    //   }
    // ]
  },
  {
    id: "3",
    title: "日志管理",
    icon: "file-text-outlined",
    path: "/log",
    roles: ["admin"],
    enable: false
  }
]
