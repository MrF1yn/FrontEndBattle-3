<script>
	import './styles.css';
	import NavBar from "$lib/NavBar.svelte";
    import SideBar from "$lib/SideBar.svelte";
</script>
<svelte:head>
    <title>LinkedIn</title>
<!--    <link rel="stylesheet" href="./styles.css">-->
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    />
    <!--	<meta name="description" content="Svelte demo app" />-->
</svelte:head>
<NavBar></NavBar>
<div class="flex items-end h-[100vh] main">
    <SideBar></SideBar>
    <slot></slot>
</div>

<style>
    @import "styles.css";

    :global(*::-webkit-scrollbar) {
        width: 5px;
        height: 5px;
    }

    :global(*::-webkit-scrollbar-thumb) {
        background: #666;
    }
</style>
