"use client";
import { Container, Typography, Paper, Box } from '@mui/material';
import ThemeProvider from "@/app/ThemeProvider";
import { SampleBarChart } from "@/app/SampleBarChart";
import ThemeProvider2 from "@/app/ThemeProvider2";
import { useState, useEffect } from "react";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return 'loading...';
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Wrapper in a ThemeProvider with Noto Sans
        </Typography>
        <ThemeProvider>
          <SampleBarChart />
        </ThemeProvider>

        <Typography variant="h6" gutterBottom>
          Wrapper in a ThemeProvider with serif
        </Typography>
        <ThemeProvider2>
          <SampleBarChart />
        </ThemeProvider2>

        <Typography variant="h6" gutterBottom>
          No wrapper
        </Typography>
        <SampleBarChart />


        <Typography variant="h6" gutterBottom>
          Wrapper in a ThemeProvider with Noto Sans, <br/>
          But it doesn't seem to remove the issue.
        </Typography>
        <ThemeProvider>
          <Box sx={{
            fontFamily: 'sans-serif',
            "& .MuiChartsLegend-series text": { fontFamily: 'sans-serif' },
            "& .MuiChartsAxis-tickContainer": { fontFamily: 'sans-serif !important' },
            "& *": { fontFamily: 'sans-serif !important' },
            '--font-primary': 'sans-serif',
          }}>
            <SampleBarChart />
          </Box>
        </ThemeProvider>

        <Typography variant="h6" gutterBottom>
          Nested themes, first Noto Sans, then serif inside, seems to work.
        </Typography>
        <ThemeProvider>
          <ThemeProvider2>
            <SampleBarChart />
          </ThemeProvider2>
        </ThemeProvider>

      </Paper>
    </Container>
  );
}
