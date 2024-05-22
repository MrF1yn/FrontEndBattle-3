<script>
import ProfileInfoItem from "$lib/ProfileInfoItem.svelte";
import JobsItem from "$lib/JobsItem.svelte";
</script>

<main class="bg-primary-background h-[93vh] w-full flex flex-col items-center pt-3 overflow-y-scroll gap-2">
    <div class="w-[100%] h-full flex gap-10 flex-col items-center">
        <ProfileInfoItem
                url="https://randomuser.me/api/portraits/men/3.jpg"
                title="Dibyajyoti Dey"
                connections="21"
                description="KIIT ECSE '27 | Web Dev @GDSC KIIT || Core Dev @GFG KIIT | AI/ML | WEB DEV | ROBOTICS"
                address="Siliguri, West Bengal, India | Contact info"
        ></ProfileInfoItem>
        <JobsItem
                followers="9,891"
        ></JobsItem>
    </div>
</main>