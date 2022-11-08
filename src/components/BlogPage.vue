<template>
    <div class="main-container">
        <div class="container">
            <logo-component />
            <social-icons />
            <power-button />
            <anchor />
            <div class="Center">
                <div class="Grid">
                    <BlogComponent :posts="blogPosts" />
                </div>
            </div>
            <big-title top="5rem" left="5rem" text="BLOG" color="rgba(0,0,0,0.1)"></big-title>
        </div>
    </div>
</template>

<script>
    import LogoComponent from "@/components/subComponent/LogoComponent";
    import SocialIcons from "@/components/subComponent/SocialIcons";
    import PowerButton from "@/components/subComponent/PowerButton";
    import BlogComponent from "@/components/BlogComponent";
    import anchor from "@/components/subComponent/anchor";
    import BigTitle from "@/components/subComponent/BigTitle";
    export default {
        name: "BlogPage",
        components:{
            BigTitle,
            LogoComponent,
            SocialIcons,
            PowerButton,
            BlogComponent,
            anchor
        },
        data(){
            return{
                blogPosts:[
                    {
                        id:1,
                        name:"My stories and programming!!!",
                        tags:["programming","student","web_design"],
                        date:"13 May, 2021",
                        imgSrc:"https://res.cloudinary.com/practicaldev/image/fetch/s--sBeV06Xc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yrzy75q4dzibqz6rf82.png",
                        link:"https://virgool.io/blogfam/%D8%AF%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D9%85%D9%86-%D9%88-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C%D9%82%D8%B3%D9%85%D8%AA-%D8%B3%D9%88%D9%85-ovrlwhkkywmm"
                    },
                    {
                        id:2,
                        name:"How to write contracts in programming projects",
                        tags:["contracts","project"],
                        date:"5 July, 2021",
                        imgSrc:"https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625479747640%2F7KzwP9nmj.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
                        link:"https://virgool.io/@ho3inmoradi/%D8%AF%D8%B1-%D9%BE%D8%B1%D9%88%DA%98%D9%87-%D9%87%D8%A7%DB%8C-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%DA%86%DA%AF%D9%88%D9%86%D9%87-%D9%82%D8%B1%D8%A7%D8%B1%D8%AF%D8%A7%D8%AF-%D8%A8%D9%86%D9%88%DB%8C%D8%B3%DB%8C%D9%85-higcyk52frmr"
                    },
                    {
                        id:3,
                        name:"Networking in business",
                        tags:["Networking","business"],
                        date:"6 July, 2021",
                        imgSrc:"https://codebucks.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1625552344293%2Fegwis0UIX.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
                        link:"https://virgool.io/@ho3inmoradi/%D8%B4%D8%A8%DA%A9%D9%87-%D8%B3%D8%A7%D8%B2%DB%8C-%D8%AF%D8%B1-%DA%A9%D8%B3%D8%A8-%D9%88-%DA%A9%D8%A7%D8%B1-wdpmsuo6i8eo"
                    },
                    {
                        id:4,
                        name:"How to stay happy and healthy while freelancing",
                        tags:["work","happy"],
                        date:"26 May, 2021",
                        imgSrc:"https://res.cloudinary.com/practicaldev/image/fetch/s--r5oUDhhT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/036s7j5b73up7455rdth.png",
                        link:"https://virgool.io/@ho3inmoradi/%DA%86%DA%AF%D9%88%D9%86%D9%87-%D8%AF%D8%B1-%D9%81%D8%B1%DB%8C%D9%84%D9%86%D8%B3%D8%B1%DB%8C-%D8%B4%D8%A7%D8%AF-%D9%88-%D8%B3%D8%A7%D9%84%D9%85-%D8%A8%D8%A7%D9%82%DB%8C-%D8%A8%D9%85%D8%A7%D9%86%DB%8C%D9%85-g2w4g2hykmps"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .main-container{
        background-image: url("../assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }

    .container{
        background-color: rgba(252, 246, 244, 0.8);
        width: 100%;
        height: auto;
        position: relative;
        padding-bottom: 5rem;
    }

    .Center{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10rem;
    }
</style>