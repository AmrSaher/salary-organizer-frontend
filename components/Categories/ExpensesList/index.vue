<template>
    <ul>
        <!-- data-type=0 hide the delete button data-type=1 show the delete button -->
        <li
            class="li_vessel"
            v-for="(item, index) in lists"
            data-type="0"
            :key="index"
        >
            <!-- "touchstart" is triggered when the finger touches the screen "touchend" is triggered when the finger leaves the screen "capture" is used for event capture -->
            <div
            @touchstart.capture="touchStart"
            @touchend.capture="touchEnd"
            @click="oneself"
            >
            <div class="contant">
                <img class="image" :src="item.imgUrl" alt />
                <div class="rightBox">
                <div>{{ item.title }}</div>
                <div>{{ item.subheading }}</div>
                <div>{{ item.faddish }}</div>
                <div>{{ item.price }}</div>
                </div>
            </div>
            </div>
            <div class="removeBtn" @click="remove" :data-index="index">
            remove
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      lists: [
        {
          title: "Title 1",
          imgUrl: "https://picsum.photos/200/300",
          subheading: "Subheading 1",
          faddish: "Breaking Style",
          price: "$1.00",
        },
        {
          title: "Title 2",
          imgUrl: "https://picsum.photos/200/300",
          subheading: "Subheading 1",
          faddish: "Breaking Style",
          price: "$1.00",
        },
        {
          title: "Title 3",
          imgUrl: "https://picsum.photos/200/300",
          subheading: "Subheading 1",
          faddish: "Breaking Style",
          price: "$1.00",
        },
        {
          title: "Title 4",
          imgUrl: "https://picsum.photos/200/300",
          subheading: "Subheading 1",
          faddish: "Breaking Style",
          price: "$1.00",
        },
        {
          title: "Title 61",
          imgUrl: "https://picsum.photos/200/300",
          subheading: "Subheading 1",
          faddish: "Breaking Style",
          price: "$1.00",
        },
        {
          title: "Title 5",
          imgUrl: "https://picsum.photos/200/300",
          subheading: "Subheading 1",
          faddish: "Breaking Style",
          price: "$1.00",
        },
      ],
      startX: 0, //Slide to start
      endX: 0, //Slide end
    };
  },
  methods: {
    // Swipe to the left when the delete button appears, click the product information area to cancel the deletion
    oneself() {
      if (this.checkSlide()) {
        this.restSlide();
      } else {
        // Click on the product information to pop up a pop-up box
        alert("hello Word!");
      }
    },
    //Swipe to start
    touchStart(e) {
      // Record the initial position
      this.startX = e.touches[0].clientX;
    },
    //Slide end
    touchEnd(e) {
      // The currently sliding parent element
      let parentElement = e.currentTarget.parentElement;
      // Record end position
      this.endX = e.changedTouches[0].clientX;
      // Swipe left more than 30 distance to delete the appearance
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        this.restSlide();
        parentElement.dataset.type = 1;
      }
      // Swipe right
      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        this.restSlide();
        parentElement.dataset.type = 0;
      }
      this.startX = 0;
      this.endX = 0;
    },
    //Determine whether there is currently a slider in the sliding state
    checkSlide() {
      let listItems = document.querySelectorAll(".li_vessel");
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].dataset.type == 1) {
          return true;
        }
      }
      return false;
    },
    //Reset the sliding state
    restSlide() {
      let listItems = document.querySelectorAll(".li_vessel");
      // reset
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].dataset.type = 0;
      }
    },
    //Delete data information
    remove(e) {
      // current index value
      let index = e.currentTarget.dataset.index;
      // reset
      this.restSlide();
      // Delete a data in the array lists
      this.lists.splice(index, 1);
    },
  },
};
</script>

<style>
.li_vessel {
  /* All styles 0.2 seconds slow motion*/
  transition: all 0.2s;
}
/* =0 hide */
.li_vessel[data-type="0"] {
  transform: translate3d(0, 0, 0);
}
/* =1 display */
.li_vessel[data-type="1"] {
  /* The larger the -64px setting, the farther you can slide left. It is best to set the same value as the width and positioning distance of the delete button below*/
  transform: translate3d(-64px, 0, 0);
}
/* Delete button */
.li_vessel .removeBtn {
  width: 64px;
  height: 103px;
  background: #ff4949;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 22px;
  position: absolute;
  top: 0px;
  right: -64px;
  line-height: 103px;
  text-align: center;
  border-radius: 2px;
}
/* Picture style on the left */
.contant {
  overflow: hidden; /*eliminate the floating caused by the picture*/
  padding: 10px;
  background: #ffffff;
}

.contant .image {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  float: left;
}
/* The text information style on the right */
.rightBox {
  overflow: hidden;
  padding-left: 8px;
}
.rightBox div:first-child {
  font-weight: bold;
}
.rightBox div:nth-child(2) {
  margin-top: 4px;
  font-size: 14px;
}
.rightBox div:nth-child(3) {
  width: 24px;
  background: rgb(219, 91, 113);
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 2px 4px 2px 4px;
  margin-left: auto;
}
.rightBox div:last-child {
  color: red;
  font-size: 14px;
  font-weight: bold;
}
</style>
