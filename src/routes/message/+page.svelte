<script lang="ts">
    import {Button, Icon} from "@sveltestrap/sveltestrap";
    import {onMount} from "svelte";
    import EmployeeItem from "$lib/EmployeeItem.svelte";
    import { Input } from '@sveltestrap/sveltestrap';
    import ChatItem from "$lib/ChatItem.svelte";
    import {conversations} from "$lib/dummyConversations";
    let collapsed: boolean = false;
    let width: string = "w-[30%]";
    let visible: string = "";
    let currId: number = 0;
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
            width = "w-[30%]";
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


    const dummyData = [
        {
            name: "John Doe",
            job: "Software Engineer",
            address: "123 Main Street, Anytown, USA",
            profilePicture: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Jane Smith",
            job: "Graphic Designer",
            address: "456 Elm Street, Othertown, USA",
            profilePicture: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Bob Johnson",
            job: "Marketing Manager",
            address: "789 Oak Street, Anothertown, USA",
            profilePicture: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name: "Alice Williams",
            job: "Data Scientist",
            address: "567 Pine Street, Somewhere City, USA",
            profilePicture: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            name: "Michael Brown",
            job: "Financial Analyst",
            address: "890 Maple Avenue, Another City, USA",
            profilePicture: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            name: "Emily Davis",
            job: "HR Coordinator",
            address: "246 Cedar Lane, Smalltown, USA",
            profilePicture: "https://randomuser.me/api/portraits/women/6.jpg"
        }
    ];


</script>

<div class="h-[93vh] w-full bg-primary-background-1 flex flex-col flex-grow text-primary-foreground">
    <div class="w-full h-full flex border-2 gap-2 ">
        <div class="{width} h-full flex flex-col p-2 border-r gap-2">
            <div class="flex items-center justify-center p-2 font-[RoobertBold] text-xl">
                <span class="{visible} mr-auto">In Mail</span>
                <Button size="sm" class="bg-primary-background-1 border-0 text-2xl" on:click={toggle}>
                    <Icon name="arrow-bar-left" class="text-primary-foreground"/>
                </Button>
            </div>
            <div class="flex items-start p-2 font-[RoobertBold] text-xl h-fit">
                <span class=" {collapsed?'vertical-up ml-auto mr-auto':''}">Your Messages</span>
            </div>
            <div class="{visible} w-full h-full flex flex-col items-center   font-[RoobertRegular] p-2 overflow-y-scroll">
                {#each dummyData as {name, job, address, profilePicture}, i}
                    <span on:click={
                       ()=>{currId=i;}
                       } class="w-full p-0 hover:bg-primary-background-2 cursor-pointer">
                    <EmployeeItem
                     url="{profilePicture}" showFollow={false} name="{name}" description="{job} | 2years" address="{address}"></EmployeeItem>
                    </span>
                {/each}
            </div>
        </div>
        <div class="{collapsed?'w-[100%]':'w-[70%]'} h-full flex flex-col">
            {#key currId}
                    <div class="w-full ">
                        <EmployeeItem url="{dummyData[currId].profilePicture}" showFollow={false} name="{dummyData[currId].name}"
                                      description="{dummyData[currId].job} | 2years"
                                      address="{dummyData[currId].address}"></EmployeeItem>
                    </div>
                    <div class="w-full h-full overflow-y-auto flex flex-col p-2 gap-3">
                        {#each conversations[currId] as {chat, sendOrReceive, time, date} }
                            <ChatItem text="{chat}" right={sendOrReceive} date="{date}, {time}" ></ChatItem>
                        {/each}
                    </div>
                    <div class="w-full h-[70px] flex justify-evenly items-center p-3 mt-auto">
                        <Input id="plainExample" plaintext placeholder="chat"
                               class="h-full text-primary-foreground border-2 p-1 border-primary-foreground bg-primary-background"/>
                        <Button class="flex justify-between gap-2 items-center text-md bg-primary-accent hover:bg-primary-accent-1 border-primary-foreground send rounded-tl-none rounded-bl-none">
                            <Icon name="send" class="text-primary-foreground"/>
                            <span>Send</span>
                        </Button>
                    </div>
                {/key}
        </div>


    </div>

</div>

<style>
    .vertical-up{
        writing-mode: vertical-rl;
        text-orientation: upright;
    }

    .border-r{
        border-right-width: 2px;
    }

    .send{
        border-right-width: 3px;
        border-top-width: 3px;
        border-left-width: 0;
        border-bottom-width: 3px;
    }
</style>