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
        <Typography variant="h6" gutterBottom color="error">
          Wrapped in a ThemeProvider with Noto Serif
        </Typography>
        <ThemeProvider>
          <SampleBarChart />
        </ThemeProvider>

        <Typography variant="h6" gutterBottom color="success">
          Wrapped in a ThemeProvider with another font (serif)
        </Typography>
        <ThemeProvider2>
          <SampleBarChart />
        </ThemeProvider2>

        <Typography variant="h6" gutterBottom color="success">
          No wrapper, no special font
        </Typography>
        <SampleBarChart />


        <Typography variant="h6" gutterBottom color="error">
          Wrapped in a ThemeProvider with Noto Serif, <br />
          Overwriting with local css to normal font (serif)<br />
          But it doesn't seem to remove the issue.
        </Typography>
        <ThemeProvider>
          <Box sx={{
            fontFamily: 'serif',
            "& .MuiChartsLegend-series text": { fontFamily: 'serif' },
            "& .MuiChartsAxis-tickContainer": { fontFamily: 'serif !important' },
            "& *": { fontFamily: 'serif !important' },
            '--font-primary': 'serif',
          }}>
            <SampleBarChart />
          </Box>
        </ThemeProvider>

        <Typography variant="h6" gutterBottom color="success">
          Nested themes, first Noto Serif, then serif inside, seems to work.
        </Typography>
        <ThemeProvider>
          <ThemeProvider2>
            <SampleBarChart />
          </ThemeProvider2>
        </ThemeProvider>

        <Typography variant="h6" gutterBottom color="success">
          Setting noto font without using a theme seems to work.
        </Typography>

        <Box sx={{
          fontFamily: '"Noto Serif", ui-serif, Georgia, "Times New Roman", serif, serif !important',
          "& .MuiChartsLegend-series text": { fontFamily: '"Noto Serif", ui-serif, Georgia, "Times New Roman", serif, serif' },
          "& .MuiChartsAxis-tickContainer": { fontFamily: '"Noto Serif", ui-serif, Georgia, "Times New Roman", serif, serif !important' },
          "& *": { fontFamily: '"Noto Serif", ui-serif, Georgia, "Times New Roman", serif, serif !important' },
          '--font-primary': '"Noto Serif", ui-serif, Georgia, "Times New Roman", serif, serif !important',
        }}>
          <SampleBarChart />
        </Box>
      </Paper>
    </Container>
  );
}
