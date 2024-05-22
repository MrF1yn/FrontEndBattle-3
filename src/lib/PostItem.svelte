<script>
    import googleLogo from "$img/Google_logo.png";
    import {Icon} from "@sveltestrap/sveltestrap";
</script>

<span class="border-b-2 p-2 w-full h-fit flex gap-2 items-center cursor-pointer">
             <img src={googleLogo} alt="" class="bg-white h-[70px]">
             <span class="w-full text-wrap break-words h-fit font-[RoobertRegular] text-md text-primary-foreground">
                 <span class="block text-sm opacity-80">1month ago</span>
                 <span>🎉 Excited to share that I've been selected for the prestigious Google Girls Hackathon,2024! 🚀 We had 2 sessions in the span of two days The kickoff session was packed with insights, and Cohort's meetup was truly inspiring.
                 </span>
                 <span class="flex gap-2">
                     <span><Icon name="hand-thumbs-up" class="text-primary-foreground "/> 100</span>
                    <span><Icon name="chat-left-text" class="text-primary-foreground"/> 56</span>
                 </span>
             </span>
</span>