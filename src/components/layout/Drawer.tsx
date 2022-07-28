import { Home } from "@mui/icons-material";
import { Box, Divider, Drawer, List, Stack } from "@mui/material";
import { css } from "@mui/material/styles";
import { memo } from "react";

import { drawerToolGroups } from "@/data/tools";
import { pagesPath } from "@/libs/$path";

import DrawerCollapseItem, { Props as DrawerCollapseItemProps } from "./DrawerCollapseItem";
import DrawerItem from "./DrawerItem";
import SearchBar from "./SearchBar";

type Props = {
  toolGroups: DrawerCollapseItemProps[];
};

export const drawerWidth = 300;

const drawer = css`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    position: relative;
    border: none;
    background-color: transparent;
  }
`;

const divider = css`
  border-color: rgba(0, 0, 0, 0.08);
`;

const StyledComponent = ({ toolGroups }: Props) => (
  <Drawer variant="permanent" css={drawer}>
    <Box paddingLeft={2} paddingRight={2} marginTop="1px">
      <SearchBar />
    </Box>
    <List component="nav">
      <Stack spacing={1}>
        <DrawerItem icon={<Home />} title="All tools" href={pagesPath.$url()} />
        <Divider css={divider} />
        <Box>
          {toolGroups.map(({ icon, title, tools }) => (
            <DrawerCollapseItem key={title} {...{ icon, title, tools }} />
          ))}
        </Box>
      </Stack>
    </List>
  </Drawer>
);

export const Component = memo(StyledComponent);

const Container = () => <Component toolGroups={drawerToolGroups} />;

export default Container;
