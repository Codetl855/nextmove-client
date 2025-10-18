export const APP_ROUTES = {
  ROOT: "/",

  USER: {
    USER_PROFILE: "/user-profile",
    EDIT_PROFILE: "/edit-profile",
    DASHBOARD: "/user-dashboard",
      PROPERTY: {
        LIST: "/list",
        PROPERTY_DETAIL: "/property-detail/:id",
        ADD_PROPERTY: "/add-property",
        EDIT_PROPERTY: "/edit-property",
        BOOKNG_REQUEST: "/property/:id/booking-request",
      },

  },


  AUTH: {
    SIGNIN: "/sign-in",
    SIGNUP: "/sign-up",
    VERIFY_EMAIL: "/verify-email",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },

  DASHBOARD: {
    ROOT: "/dashboard",
    USER_MANAGEMENT: "/dashboard/users",
    PROPERTIES: "/dashboard/properties",
    TRANSACTIONS: "/dashboard/transactions",
    MESSAGES: "/dashboard/messages",
    INBOX: "/dashboard/inbox",
    REVIEWS: "/dashboard/reviews",
    PACKAGES: "/dashboard/packages",
    POSTS: "/dashboard/posts",
  },
} as const;