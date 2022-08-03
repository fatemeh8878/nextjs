import React from "react";
import { data } from "./MenuData";
import { List, ListItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MenuList.module.scss";
const MenuHeader = () => {
  const router = useRouter();
  return (
    <div>
      <List className={styles.list}>
        {data.map((item) => (
          <Link href={item.href} key={item.id}>
            <a>
              <ListItem
                className={
                  router.pathname === `${item.href}`
                    ? styles.activeIcon
                    : styles.listicon
                }
              >
                {item.icon}
              </ListItem>
              <ListItem
                className={
                  router.pathname === `${item.href}`
                    ? styles.activeTitle
                    : styles.listTitle
                }
              >
                {item.title}
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default MenuHeader;
