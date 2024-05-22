<script lang="ts">
    import {Button, Icon} from "@sveltestrap/sveltestrap";
    import {onMount} from "svelte";
    import NewsItem from "$lib/NewsItem.svelte";
    let collapsed: boolean = false;
    let width: string = "w-[300px]";
    let visible: string = "";
    function toggle(){
        collapse(!collapsed);
    }
    function collapse(coll: boolean){
        if (coll === collapsed)return;
        collapsed = coll;
        if(coll){
            width = "w-[60px]";
            visible = "hidden";
        }else{
            width = "w-[300px]";
            visible = "";
        }
    }

    function myFunction(x: MediaQueryList) {
        if (x.matches) { // If media query matches
            collapse(true);
        } else {
            collapse(false);
        }
    }

    // Create a MediaQueryList object

    // Call listener function at run time
    onMount(()=>{
        let x = window.matchMedia("(max-width: 700px)")
        myFunction(x);

        // Attach listener function on state changes
        x.addEventListener("change", function() {
            myFunction(x);
        });
    });

</script>

<div class="h-[93vh] {width} bg-primary-background-1 flex flex-col flex-grow text-primary-foreground">
    <div class="flex items-center justify-center p-2 font-[RoobertBold] text-xl">
        <span class="{visible} mr-auto">For You</span>
        <Button size="sm"  class="bg-primary-background-1 hover:bg-primary-background-3  border-0 text-2xl" on:click = {toggle}>
            <Icon name="arrow-bar-left" class="text-primary-foreground"/>
        </Button>
    </div>
    <div class="flex items-start p-2 font-[RoobertBold] text-xl ">
        <span class=" {collapsed?'vertical-up ml-auto mr-auto':''}">LinkedIn News</span>
    </div>
    <div class="{visible} flex flex-col items-center justify-center font-[RoobertRegular]">
        <NewsItem title="Logistics goes local" time="1d" readers="7840"></NewsItem>
        <NewsItem title="Logistics goes local" time="1d" readers="7840"></NewsItem>
        <NewsItem title="Logistics goes local" time="1d" readers="7840"></NewsItem>
        <NewsItem title="Logistics goes local" time="1d" readers="7840"></NewsItem>
        <NewsItem title="Logistics goes local" time="1d" readers="7840"></NewsItem>
        <NewsItem title="Logistics goes local" time="1d" readers="7840"></NewsItem>
    </div>





</div>

<style>
    .vertical-up{
        writing-mode: vertical-rl;
        text-orientation: upright;
    }


</style>