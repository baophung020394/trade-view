import { Tabs } from "antd";
import React from "react";
import Markets from "../../components/Markets/Markets";

const { TabPane } = Tabs;
TabsView.propTypes = {};

function callback(key) {
  console.log(key);
}

function TabsView(props) {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="1 minute" key="1">
           <Markets /> 
        </TabPane>
        <TabPane tab="5 minutes" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="10 minutes" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabsView;
