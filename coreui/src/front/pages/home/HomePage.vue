<template>
  <div >
      <Slider/>
      <MessagePart/>
      <ContentPart/>
  </div>
</template>

<script>
import Slider from './Slider'
import MessagePart from './MessagePart'
import ContentPart from './ContentPart'

export default {
  name: 'HomePage',
  components: {
    Slider,
    MessagePart,
    ContentPart
  }
}
</script>