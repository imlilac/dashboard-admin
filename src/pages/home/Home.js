import React from "react";
import Feature from "../../components/Feature/Feature";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import { xAxisData } from "../../datas";
import "./Home.css";

export default function Home() {
   return (
      <div className="home">
         <Feature />
         <Chart grid title="Monthly Sale" data={xAxisData} dataKey="Sale" />
         <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
         </div>
      </div>
   );
}
