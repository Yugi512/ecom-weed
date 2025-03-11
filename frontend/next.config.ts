import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname:"www.cannaconnection.com"
        },
        {
            protocol: "https",
            hostname: "https://cdn-icons-png.flaticon.com/512/2667/2667035.png"
        },
        {
            protocol: "https",
            hostname: "images.leafly.com"
        },
        {  protocol:"https" , hostname : "leafly-public.imgix.net"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/wedding-cake.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/runtz-nug-image.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/gelato.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/blue-dream.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/purple-punch-fixed.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/gsc.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/og-kush.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/sour-diesel.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/sunset-sherbert.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/granddaddy-purple.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/do-si-dos.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/jack-herer.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/white-widow.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/pineapple-express.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/green-crack.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/bubba-kush.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/northern-lights.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/durban-poison.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/cherry-pie.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/strawberry-cough.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/trainwreck.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/WYY8ukOLRAuW8pdX2fVr_COOKIES%20&%20CREAM-181-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/blueberry.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/super-lemon-haze.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/xpdL6Nq9SGu0zjD2aNQf_ANIMAL%20COOKIES-337-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/grape-ape.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/candyland.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/super-silver-haze.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/flMvWRExSXSewuwawFG6_WHITE%20FIRE-358-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/wh5SjmW4RsmLzoNbvJAj_TAHOE%20OG-292-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/platinum-gsc.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/i7NqIuuQRd2ZQQ89VFbg_THIN%20MINT-207-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/eZUymXkCSXuiM2oElpRa_COOKIES%20KUSH-349-edited%20(1).jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/purple-kush.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/mango-kush.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/qjyKHW2TqXlzjGJyJoMA_ORANGE%20COOKIES-191-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/BWnS6paT7mvEG0e4WMHw_PAPAYA-370-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/cheese.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/lemon-cake.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/lemon-kush.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/9-pound-hammer.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/z8wRmqFPQcOrn4aDu9Vv_GOD'S%20GIFT-234-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/LEMON-OG-051-2.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/true-og.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/white-tahoe-cookies.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/acapulco.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/o4MhnTW2QK2LicV68uiY_CHOCOLOPE-212-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/sour-tangie.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/blue-diesel.jpg"},
        // {  protocol:"https" , hostname : "https://leafly-public.imgix.net/strains/photos/IaYQshrPTxiD2BOWHO1n_AnimalMints.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/orange-creamsicle.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/haze.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/AMNESIA-026.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/black-jack.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/brHMDx6QQiAUzWW1QMxC_SUPER%20SKUNK-011-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/nyc-diesel.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/dutch-treat.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/PINK-LEMONADE-020-fixed.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/DlI3zy6KSYyvONnipUnS_THE%20WHITE-330-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/MK-ULTRA-082.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/orange-crush.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/lambs-bread.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/jr.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/lemon-meringue.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/cannatonic.png"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/zT6M2MASsyZK8U9tZ9JA_MANGO%20HAZE-251-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/S1XM8RVTS1Ghpaeqc3jf_BLUEBERRY%20COOKIES-270-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/KIMBO-KUSH-030.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/GOJI-OG-112-2.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/Rk5G4CoTvy8oqv7zudgy_PINEAPPLE%20CHUNK-219-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/STRAWBERRY-DIESEL-017.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/LAVENDER-060.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/pink-champagne-fixed.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/SOUR-TSUNAMI-121.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/msT3hV3gTeKW9Kwrhtqn_BLUEBERRY%20CHEESECAKE-259-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/iAziwpkiQlmMoR4OE3kM_LIBERTY%20HAZE-240-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/raspberry-kush-fixed.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/CINEX-077.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/BLUEBERRY-DIESEL-009.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/SNOOP'S-DREAMS-100.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/black-cherry-pie.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/kosher-tangie.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/6kKy0U4GSUSbCp5HyQpz_CHEESE%20QUAKE-318-edited.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/PLUSHBERRY-054.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/primus.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/allen-wrench.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/LEMON-GARLIC-OG-095.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/frankenstein.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/pineapple-super-silver-haze.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/DUTCH-TREAT-HAZE-089.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/orange-skunk.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/green-queen.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/alien-walker.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/very-berry-haze.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/monkey-thunder.jpg"},
        // {  protocol:"https" , hostname : "https://images.leafly.com/flower-images/city-of-god.jpg"},
        {  protocol:"https" , hostname : "img.freepik.com"},
        { protocol : "https", hostname: "https://cdn-icons-png.flaticon.com/512/2667/2667035.png"},
        {protocol: "https", hostname: "images.unsplash.com"}

    ]
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
};

export default nextConfig;
