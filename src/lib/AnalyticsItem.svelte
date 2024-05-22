<script>
    import '@carbon/charts-svelte/styles.css'
    import { LineChart } from '@carbon/charts-svelte'
</script>

<div class="w-[100%] md:w-[80%]  h-fit flex flex-col p-3 border-2 gap-2 relative">
    <span class="w-full h-fit font-[RoobertBold] text-3xl text-primary-foreground">
        Analytics
    </span>
    <div class="w-full p-3">
    <LineChart
            data={[
  {
    "group": "Dataset 1",
    "key": "Qty",
    "value": 34200
  },
  {
    "group": "Dataset 1",
    "key": "More",
    "value": 23500
  },
  {
    "group": "Dataset 1",
    "key": "Sold",
    "value": 53100
  },
  {
    "group": "Dataset 1",
    "key": "Restocking",
    "value": 42300
  },
  {
    "group": "Dataset 1",
    "key": "Misc",
    "value": 12300
  },
  {
    "group": "Dataset 2",
    "key": "Qty",
    "value": 34200
  },
  {
    "group": "Dataset 2",
    "key": "More",
    "value": 53200
  },
  {
    "group": "Dataset 2",
    "key": "Sold",
    "value": 42300
  },
  {
    "group": "Dataset 2",
    "key": "Restocking",
    "value": 21400
  },
  {
    "group": "Dataset 2",
    "key": "Misc",
    "value": 0
  },
  {
    "group": "Dataset 3",
    "key": "Qty",
    "value": 41200
  },
  {
    "group": "Dataset 3",
    "key": "More",
    "value": 18400
  },
  {
    "group": "Dataset 3",
    "key": "Sold",
    "value": 34210
  },
  {
    "group": "Dataset 3",
    "key": "Restocking",
    "value": 1400
  },
  {
    "group": "Dataset 3",
    "key": "Misc",
    "value": 42100
  },
  {
    "group": "Dataset 4",
    "key": "Qty",
    "value": 22000
  },
  {
    "group": "Dataset 4",
    "key": "More",
    "value": 1200
  },
  {
    "group": "Dataset 4",
    "key": "Sold",
    "value": 9000
  },
  {
    "group": "Dataset 4",
    "key": "Restocking",
    "value": 24000,
    "audienceSize": 10
  },
  {
    "group": "Dataset 4",
    "key": "Misc",
    "value": 3000,
    "audienceSize": 10
  }
]}
            options={{
  "title": "User Performance",
  "axes": {
    "bottom": {
      "title": "Annual Job Figures",
      "mapsTo": "key",
      "scaleType": "labels"
    },
    "left": {
      "mapsTo": "value",
      "title": "Conversion rate",
      "scaleType": "linear"
    }
  },
  "height": "400px",
  "theme": "g100"
}} />
    </div>


</div>


<style>

</style>