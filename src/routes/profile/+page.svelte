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
                title="Dibyajyoti Dey"
                connections="21"
                description="KIIT ECSE '27 | Web Dev @GDSC KIIT || Core Dev @GFG KIIT | AI/ML | WEB DEV | ROBOTICS"
                address="Siliguri, West Bengal, India | Contact info"
        ></ProfileInfoItem>
        <ProfileAboutItem
                about="I am a fast learner, a team player, and a problem-solver, who values collaboration, innovation, and quality. I am looking to connect with like-minded people who share my passion for web development and AI, and to explore new opportunities and challenges in this domain."

        ></ProfileAboutItem>
        <ProfileActivityItem
                followers="1,281"
        ></ProfileActivityItem>
        <ProfileExperienceItem></ProfileExperienceItem>
        <SkillItem></SkillItem>
        <AnalyticsItem></AnalyticsItem>
    </div>
</main>


<style>
</style>
