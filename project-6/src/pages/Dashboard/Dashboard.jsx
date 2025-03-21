import React from "react";
import DashboardLayout from "../../component/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";


const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard" >
        <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
         <Transactions/>
        </GridItem>
        <GridItem colSpan={1}>
        </GridItem>
        <GridItem colSpan={1}>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard; 