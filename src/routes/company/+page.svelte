<script>
import ProfileInfoItem from "$lib/ProfileInfoItem.svelte";
import ProfileAboutItem from "$lib/ProfileAboutItem.svelte";
import ProfileActivityItem from "$lib/ProfileActivityItem.svelte";
import ProfileExperienceItem from "$lib/ProfileExperienceItem.svelte";
import SkillItem from "$lib/SkillItem.svelte";
import AnalyticsItem from "$lib/AnalyticsItem.svelte";
</script>

<svelte:head>
    <title>LinkedIn</title>
<!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">-->
    <!--	<meta name="description" content="Svelte demo app" />-->
</svelte:head>


<main class="bg-primary-background h-[93vh] w-full flex flex-col items-center pt-3 overflow-y-scroll gap-2">
    <div class="w-[100%] h-full flex gap-10 flex-col items-center">
        <ProfileInfoItem
                company={true}
                connections="9891"
                title="Google"
                description="Software Development"
                address="Mountain View, CA | 10k+ Employees"
        ></ProfileInfoItem>
        <ProfileAboutItem
                about="A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.
                        Check out our career opportunities at goo.gle/3DLEokh"
                company={true}
        ></ProfileAboutItem>
        <ProfileActivityItem
            followers="9,891"
            company={true}
        ></ProfileActivityItem>
        <AnalyticsItem></AnalyticsItem>
    </div>
</main>


<style>
</style>
