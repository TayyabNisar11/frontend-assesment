const MuiButton = {
    defaultProps: {
        disableElevation: true,
    },
    styleOverrides: {
        containedInherit: ({ theme }) => ({
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[800],
            "&:hover": {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.grey[700],
            },
        }),
        sizeLarge: {
            minHeight: 48,
        },
        root: {
            borderRadius: 8,
            textTransform: "none",
        },
    },
};

export const components = {
    MuiButton
}
