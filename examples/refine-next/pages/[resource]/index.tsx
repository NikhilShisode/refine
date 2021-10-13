export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { GetServerSideProps } from "next";

import { authProvider } from "../../src/authProvider";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { isAuthenticated, redirect } = await checkAuthentication(
        authProvider,
        context,
    );

    if (!isAuthenticated) {
        return { redirect };
    }

    return {
        props: {},
    };
};