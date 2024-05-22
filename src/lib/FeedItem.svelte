<script>
import googleLogo from "$img/Google_logo.png";
import {Button, Icon} from "@sveltestrap/sveltestrap";
</script>

<div class="w-[100%] md:w-[60%]  h-fit flex flex-col p-3 border-2 gap-2">
    <div class="w-full h-fit flex gap-2 font-[RoobertLight] items-center flex-col md:flex-row">
        <img src={googleLogo} alt="" class="bg-white rounded-full  h-[70px]">
        <span class="font-[RoobertBold] w-full h-full text-[100%]">
            Ayushi Jain
            <span class="font-[RoobertLight] block text-sm w-full h-full">
                Web Developer | 1d ago
            </span>
        </span>
        <Button class="bg-primary-background-1 hover:bg-primary-background-3  border-0 text-center flex items-center w-full md:w-auto  gap-2 h-full">
            <Icon name="plus-square" class="text-primary-foreground"/>
            Follow
        </Button>
    </div>
    <div class="content font-[RoobertLight] text-[20px] w-full h-full text-wrap break-words">
        🚀 DAY 3 of #101daysdailycodingchallenge :-<br>
        Namaste people!!!👋<br>
        🌟 Today, I have learnt about the fundamentals of binary search and tackled some questions related to it from leetcode.<br>
        I tackled some easy questions namely finding peak element, mountain array peak index, guess higher or lower and minimum in rotated sorted array.<br>
        (Give a way to optimise the last, I was stuck …)<br>
        <br>
        Time to do it again tomorrow.<br>
        <br>
        <br>
        #101daysofcodingchallenge #DSA #algorithms #problemsolving USC.KIIT<br>
        #USCKIIT100DAYSOFCODE#dailylearning #Arrays #codingskill #techlearning #coding #programmingjourney #techskills #codelife #leetcode #codeforces #learningtogether #dailychallenge #strings #characterarrays #complexities #2DArrays #dataStructures<br>
    </div>
    <div class="w-full flex items-center justify-between h-[50px]">
        <Button class="bg-primary-background hover:bg-primary-background-3  border-0 text-center flex items-center gap-2 h-full text-xl">
            <Icon name="hand-thumbs-up" class="text-primary-foreground "/>
            <span class="hidden lg:block">
                Like
            </span>
        </Button>
        <Button class="bg-primary-background hover:bg-primary-background-3  border-0 text-center flex items-center gap-2 h-full text-xl">
            <Icon name="chat-left-text" class="text-primary-foreground"/>
            <span class="hidden lg:block">
                Comments
            </span>
        </Button>
        <Button class="bg-primary-background hover:bg-primary-background-3  border-0 text-center flex items-center gap-2 h-full text-xl">
            <Icon name="arrow-repeat" class="text-primary-foreground"/>
            <span class="hidden lg:block">
                Repost
            </span>
        </Button>
        <Button class="bg-primary-background hover:bg-primary-background-3  border-0 text-center flex items-center gap-2 h-full text-xl">
            <Icon name="send" class="text-primary-foreground"/>
            <span class="hidden lg:block">
                Send
            </span>
        </Button>
    </div>
</div>
<style>

</style>