import { Box, Button, TextField, Typography } from "@mui/material"
import { NextPage } from "next"
import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"

const Login: NextPage = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters length")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  console.log()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid black",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        <Typography my={1} variant="h5">
          Login
        </Typography>

        <TextField
          sx={{ marginY: "16px" }}
          fullWidth
          label="Email"
          variant="outlined"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          label="password"
          variant="outlined"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          onClick={() => router.push("/dashboard")}
          sx={{ marginTop: "16px" }}
          variant="outlined"
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}

export default Login
