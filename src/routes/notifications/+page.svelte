<script>
import ConnectionsItem from "$lib/ConnectionsItem.svelte";
</script>

<main class="bg-primary-background h-[93vh] w-full flex flex-col items-center pt-3  gap-2">
    <div class="w-[100%] h-full flex gap-10 flex-col items-center">
        <ConnectionsItem
                title="Notifications"
                description="Notifications"
                followers="100"
                custom={true}
        ></ConnectionsItem>
    </div>
</main>