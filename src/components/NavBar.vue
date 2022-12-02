<template>
    <header class="nav-bar">
        <div class="navigation">
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
                <div class="dropdown-navbar">
                    <div class="dropdown">
                        <span>Pages</span> 
                        <button @click="showMenu()" class="drop-btn">
                            <svg width="15" height="15" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49878 5.625L8.87378 0.625H0.123779L4.49878 5.625Z" fill="white"/>
</svg>
                        </button>
                        <div class="drop-content">
                            <ul>
                                <li v-for="page in pages" :key="page.id">
                                    <router-link :to="`/pages/${page.id}`">{{ page.name }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
        return {
            nav: [
                {
                    name: 'Home',
                    to: '/'
                },
                {
                    name: 'Gallery',
                    to: '/gallery'
                },
                {
                    name: 'About',
                    to: '/about'
                },
                {
                    name: 'Contact',
                    to: '/contact'
                },
                {
                    name: 'Pages',
                    to: '/pages/:id'
                }
            ]
        }
    },
    created () {
        this.$store.dispatch('get_data')
    },
    computed: {
        pages () {
            return this.$store.state.pages
        },
        page () {
            const id = this.$router.currentRoute.params.id
            const pages = this.$store.state.pages
            const page = pages.filter(obj => obj.id.toString() === id)[0]
            return page
        }
    }
}

function showMenu (event) {
    event.preventDefault();
}
</script>

<style lang="scss">
.nav-bar {
    @media only screen and (min-width: 0) {
        padding: 20px;

        .navigation {
            width: 96%;
            top: 30px;
            height: 25%;
            position: absolute;
            overflow: hidden;
            animation: navbar 2s linear forwards;
        }

        .navigation nav {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .navigation a {
            font-size: 24px;
            color: white;
            text-decoration: none;

            &.router-link-exact-active {
                text-decoration: underline;
            }
        }

        @keyframes navbar {
            0% {
                width: 0px;
                height: 0px;
            }
            30% {
                width: 15px;
                height: 0px;
            }
            60% {
                width: 15px;
                height: 30px;
            }
        }
        .dropdown-navbar {
            padding: 0;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            
            .dropdown {
                float: center;
                overflow: hidden;
            }
            .dropdown, .drop-btn {
                margin: 0;
                padding: 0 15px;
                background-color: transparent;
                border: none;
                outline: none;
            }
            .dropdown span {
                font-size: 24px;
                color: white;
                text-decoration: none;
            }
            .drop-content {
                display: none;
                position: absolute;
                background-color: white;
                min-width: 120px;
                z-index: 1;
                border-radius: 5px;
            }
            .drop-content a {
                margin: 5px;
                padding: 2px 6px;
                float: none;
                font-size: 18px;
                color: black;
                border-bottom: 1px solid lightblue;
                text-decoration: none;
                display: block;
                text-align: left;
            }
            .drop-content a:hover {
                background-color: skyblue;
            }
            .dropdown:hover .drop-content {
                display: block;
            }
        }
    }
}
</style>