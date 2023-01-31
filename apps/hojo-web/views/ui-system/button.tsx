import Head from "next/head";
import { Container, Grid, ButtonProps, Typography } from "@mui/material"
import { AddCircle, Cached } from "@mui/icons-material"
import { PrimaryButton } from "@web/components/shared";

export default function ButtonSystem() {
    const propsBtn: ButtonProps = {
        size: "large"
    }

    return (
        <>
            <Head>
                <title>Button System</title>
            </Head>
            <Container style={{ minHeight: "100vh" }}>
                <Grid container columnSpacing={2}>
                    <Grid item container xs={12} spacing={3} padding="10px">
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" textAlign="center">
                                Default
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" textAlign="center">
                                Disabled
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} spacing={3} alignItems="stretch">
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn }}>
                                Default
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, startIcon: <AddCircle /> }}>
                                Default
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn }}>
                                <Cached />
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, variant: "outlined" }}>
                                Default
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, variant: "outlined", startIcon: <AddCircle /> }}>
                                Default
                            </PrimaryButton>
                        </Grid>
                    </Grid>
                    <Grid item container xs={6} spacing={3}>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, disabled: true }}>
                                Disabled
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, disabled: true, startIcon: <AddCircle /> }}>
                                Disabled
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, disabled: true }}>
                                <Cached />
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, disabled: true, variant: "outlined" }}>
                                Disabled
                            </PrimaryButton>
                        </Grid>
                        <Grid item xs={12}>
                            <PrimaryButton props={{ ...propsBtn, disabled: true, variant: "outlined", startIcon: <AddCircle /> }}>
                                Disabled
                            </PrimaryButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}