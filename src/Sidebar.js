import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import "./Sidebar.css";
import SidebarNav from "./SidebarNav.js";
import db from "./Firebase.js";

function Sidebar() {
  const [channels, setChannels] = useState(["a", "b"]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Lolakulu Projects</h2>
          <h3>
            <FiberManualRecordIcon />
            Srinivas Bhamidipati
          </h3>
        </div>
        <div>
          <CreateIcon className="sidebar__createicon" />
        </div>
      </div>
      <SidebarNav Icon={InsertCommentIcon} title="threads" />
      <SidebarNav Icon={InboxIcon} title="Mentions and reactions" />
      <SidebarNav Icon={DraftsIcon} title="saved items" />
      <SidebarNav Icon={BookmarkBorderIcon} title="channel browser" />
      <SidebarNav Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarNav Icon={AppsIcon} title="Apps" />
      <SidebarNav Icon={FileCopyIcon} title="File browser" />
      <SidebarNav Icon={ExpandLessIcon} title="show less" />
      <hr />
      <SidebarNav Icon={ExpandMoreIcon} title="channels" />
      <hr />
      <SidebarNav Icon={AddIcon} title="Add channel" />
      {channels.map((channel) => (
        <SidebarNav title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
