<template>
  <v-toolbar dark app :color="$root.themeColor">
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-autocomplete
      v-model="selectedValue"
      :items="searchList"
      @focus="navItemsMakeList"
      :menu-props="searchCompOptions"
      clearable
      :loading="loading"
      hide-details
      item-text="show"
      item-value="show"
      label="Search"
      solo
    >
      <template v-slot:no-data>
        <v-list-tile>
          <v-list-tile-title>
            검색 결과가 없습니다.
          </v-list-tile-title>
        </v-list-tile>
      </template>
      <template v-slot:item="{ item }">
        <div @click="clickSearchItem(item)" :style="searchItemStyle">
          <v-list-tile v-if="item.route !== undefined && item.route !== ''">
            <v-list-tile-title style="cursor:pointer">
              {{ item.show }}
            </v-list-tile-title>
            <v-spacer />
          </v-list-tile>
          <v-list-tile v-if="item.redirect !== undefined && item.redirect !== null">
            <v-list-tile-title style="cursor:pointer">
              {{ item.show }}
            </v-list-tile-title>
            <v-list-tile-action>
              <v-icon>open_in_new</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </div>
      </template>
    </v-autocomplete>

    <v-spacer></v-spacer>
    <!--
    <v-rating
        v-model="rating"
        background-color="white"
        medium
        :ripple="false"
        color="white"
        dense />
    -->

<!-- Settings -->
    <v-dialog v-model="dialogSettings" width="700">
      <v-card>
        <v-card-title class="headline" primary-title> Settings </v-card-title>
        <v-card-text>
          Choose theme color ?
          <swatches
            v-model="$root.themeColor"
            inline
            colors="material-dark"
            :exceptions="['#FFFFFF']"
            shapes="circles"
            show-border
          ></swatches>
        </v-card-text>
        <v-card-text>
          Set Up System User
          <v-form>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12 xs6 md11>
                  <v-text-field
                    v-model="userEmail"
                    label="User Email"
                    hint="Set user email"
                  />
                </v-flex>
                <v-flex xs12 xs6 md1 />
                <v-flex xs12 sm6 md11>
                  <v-text-field
                    v-model="password"
                    :append-icon="
                      showPassword ? 'visibility_off' : 'visibility'
                    "
                    :type="showPassword ? 'text' : 'password'"
                    label="New Password"
                    hint="Please choose a complex one.."
                    :error="error"
                    @click:append="showPassword = !showPassword"
                  />
                </v-flex>
                <v-flex xs12 sm6 md1 />
                <v-flex xs12 sm6 md11>
                  <v-text-field
                    v-model="passwordConfirm"
                    :append-icon="
                      showPasswordConfirm ? 'visibility_off' : 'visibility'
                    "
                    :type="showPasswordConfirm ? 'text' : 'password'"
                    label="Confirm New Password"
                    hint="and confirm it."
                    :error="error"
                    @click:append="showPasswordConfirm = !showPasswordConfirm"
                  />
                </v-flex>
                <v-flex xs12 sm6 md1 />
                <v-flex xs12 xs6 md11>
                  <v-switch
                    label="Email Notification"
                    color="success"
                    v-model="switchEmailNotification"
                  />
                </v-flex>
                <v-flex xs12 xs6 md1 />
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="setUpSettings">
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="showResult" :timeout="2000" top>
      {{ result }}
    </v-snackbar>

    <!-- 까치 CSP Update -->
    <div class="text-center">
      <v-menu offset-y>
         <template v-slot:activator="{ on, attrs }">
           <v-btn
             color="primary"
             dark
            v-bind="attrs"
            v-on="on"
          >
            CSP Update
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in CSPUpdateItems"
            :key="index"
            name="dd"
          >
            <v-btn v-bind:href="item.url" target="_blank">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- 까치 CSP Blog -->
    <div class="text-center">
      <v-menu offset-y>
         <template v-slot:activator="{ on, attrs }">
           <v-btn
             color="orange darken-2"
             dark
            v-bind="attrs"
            v-on="on"
          >
            CSP Blog
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in CSPBlogItems"
            :key="index"
          >
            <v-btn v-bind:href="item.url" target="_blank">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>


    <!-- <v-btn icon href="http://10.62.150.51:8000" :ripple="false">
      <v-icon medium>fab fa-github</v-icon>
    </v-btn> -->
    <v-menu
      offset-y
      origin="center center"
      :nudge-bottom="10"
      transition="scale-transition"
    >

      <v-btn
        icon
        flat
        slot="activator"
        @click="notifications.map((x) => (x.isActive = false))"
      >
        <v-badge color="green" overlap>
          <span
            slot="badge"
            v-if="notifications.filter((x) => x.isActive).length > 0"
          >
            {{ notifications.filter((x) => x.isActive).length }}
          </span>
          <!-- <v-icon medium>fas fa-aws</v-icon> -->
          <i class="fab fa-aws"></i>
        </v-badge>
      </v-btn>

      <v-card class="elevation-0" @click="this.routeIntoEventPage">
        <v-toolbar card dense color="transparent">
          <v-toolbar-title v-if="notifications.length > 0"
            ><h5>
              {{ notifications.length }}개의 Issue 확인하기 >
            </h5></v-toolbar-title
          >
          <v-toolbar-title v-else
            ><h5>지난 Issue 확인하기 ></h5></v-toolbar-title
          >
        </v-toolbar>
        <v-card-text class="pa-0">
          <v-list two-line class="pa-0">
            <template v-for="(item, index) in notifications">
              <v-divider :key="index" />
              <v-list-tile
                avatar
                :key="item.title"
                @click.parent="item.onClick"
              >
                <v-list-tile-avatar :color="item.color">
                  <v-icon dark>{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content @click="handleClick">
                  <v-list-tile-sub-title
                    v-html="item.title"
                  ></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action class="caption">
                  {{ item.actionAt }}
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
          <v-divider></v-divider>
          <v-btn block flat v-if="false">See all notifications</v-btn>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </v-menu>
    <v-menu
      offset-y
      origin="center center"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <v-btn
        icon
        flat
        slot="activator"
        @click="notifications.map((x) => (x.isActive = false))"
      >
        <v-badge color="green" overlap>
          <span
            slot="badge"
            v-if="notifications.filter((x) => x.isActive).length > 0"
          >
            {{ notifications.filter((x) => x.isActive).length }}
          </span>
          <!-- <v-icon medium>fas fa-google</v-icon> -->
          <i class="fab fa-google"></i> 

        </v-badge>
      </v-btn>

      <v-card class="elevation-0" @click="this.routeIntoGCPEventPage">
        <v-toolbar card dense color="transparent">
          <v-toolbar-title v-if="notifications.length > 0"
            ><h5>
              {{ notifications.length }}개의 Issue 확인하기 >
            </h5></v-toolbar-title
          >
          <v-toolbar-title v-else
            ><h5>지난 Issue 확인하기 ></h5></v-toolbar-title
          >
        </v-toolbar>
        <v-card-text class="pa-0">
          <v-list two-line class="pa-0">
            <template v-for="(item, index) in notifications">
              <v-divider :key="index" />
              <v-list-tile
                avatar
                :key="item.title"
                @click.parent="item.onClick"
              >
                <v-list-tile-avatar :color="item.color">
                  <v-icon dark>{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content @click="handleClick">
                  <v-list-tile-sub-title
                    v-html="item.title"
                  ></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action class="caption">
                  {{ item.actionAt }}
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
          <v-divider></v-divider>
          <v-btn block flat v-if="false">See all notifications</v-btn>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </v-menu>

<!-- 사람 이미지 있는 부분 -->
    <v-menu
      offset-y
      origin="center center"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <v-btn icon large flat slot="activator" :ripple="false">
        <v-avatar size="42px">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
          />
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          @click="item.click"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

    <iframe src='//kaci.opsinno.cloud' id='kaci-iframe' style="visibility:hidden;display:none"></iframe>
  </v-toolbar>

</template>

<script>
import Axios from "axios";
import navItems from './NavigationItems'

export default {
  created() {
    const vm = this;
    vm.getPhdData();
  },
  data() {
    return {
      nav: navItems,
      searchList: [],
      loading: false,
      selectedValue: null,
      searchCompOptions: {
        closeOnClick: false,
        closeOnContentClick: true,
        disableKeys: true,
        openOnClick: false,
        maxHeight: 400,
        offsetY: true,
        offsetOverflow: true,
        transition: false
      },
      // --
      rating: null,
      dialog: false,
      dialogSettings: false,
      switchEmailNotification: true,
      showPassword: null,
      showPasswordConfirm: null,
      userEmail: null,
      password: null,
      passwordConfirm: null,
      error: false,
      showResult: false,
      result: "",
      items: [
        {
          icon: "account_circle",
          href: "#/personal",
          title: "Personal Dashboard",
          click: (e) => {},
        },
        {
          icon: "settings",
          href: "#",
          title: "Settings",
          click: () => {
            const vm = this;

            vm.dialogSettings = true;
          },
        },
        {
          icon: "exit_to_app",
          href: "#",
          title: "Log Out",
          click: () => {
            const vm = this;

            //vm.$router.push({ name: 'Login' });
            //vm.setCookie("token",'', '-1');
            //console.log(document.cookie);
            //document.cookie = 'token' + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;domain=opsinno.cloud';
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i];
              var eqPos = cookie.indexOf("=");
              var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
              document.cookie =
                name + "=; domain=opsinno.cloud; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
            }
            //console.log(document.cookie);
            window.location.href = "http://ubird.opsinno.cloud";
          },
        },
      ],
      notifications: [],
      CSPUpdateItems:[
        { title: 'AWS Update', url: '//kaci.opsinno.cloud/aws/update'},
        { title: 'GCP Update', url: '//kaci.opsinno.cloud/gcp/update'},
        { title: 'Azure Update', url: '//kaci.opsinno.cloud/azure/update'},
      ],
      CSPBlogItems: [
        { title: 'AWS Blog', url: '//kaci.opsinno.cloud/aws/blog' },
        { title: 'GCP Blog' , url : '//kaci.opsinno.cloud/gcp/blog' },
        { title: 'Azure Blog' , url: '//kaci.opsinno.cloud/azure/blog' },
      ],
      // [

      //   {
      //     title: 'New mail from Adam Joe',
      //     color: 'light-blue',
      //     icon: 'email',
      //     actionAt: '12 min ago',
      //     isActive: true,
      //     onClick: () => {
      //       const vm = this;

      //       vm.$router.push({ name: 'Mailbox' });
      //     }
      //   },
      //   {
      //     title: 'Scheculed meeting',
      //     color: 'red',
      //     icon: 'calendar_today',
      //     actionAt: '46 min ago',
      //     isActive: true,
      //     onClick: () => {
      //       const vm = this;

      //       vm.$router.push({ name: 'Calendar' });
      //     }
      //   },
      //   {
      //     title: 'New mail from Github',
      //     color: 'light-blue',
      //     icon: 'email',
      //     isActive: true,
      //     timeLabel: '2 hour ago',
      //     onClick: () => {
      //       const vm = this;

      //       vm.$router.push({ name: 'Mailbox' });
      //     }
      //   }

      // ]
    };
  },
  computed: {
    searchItemStyle() {
      return {
        width: `${this.$vuetify.breakpoint.width /4 + 10}px`
      }
    }
  },

  methods: {
    toggleNavigationBar() {
      const vm = this;

      vm.$emit("toggleNavigationBar");
    },

    setUpSettings() {
      const vm = this;

      if (
        vm.userEmail === null ||
        vm.password === null ||
        vm.passwordConfirm === null
      ) {
        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

      if (vm.password !== vm.passwordConfirm) {
        vm.error = true;
        vm.result = "Passwords does not match the confirm password.";
        vm.showResult = true;

        return;
      }

      vm.$root.userEmail = vm.userEmail;
      vm.$root.userPassword = vm.password;

      vm.result = "Email and password changed succesfully.";
      vm.showResult = true;

      vm.dialogSettings = false;
    },
    handleClick() {
      const vm = this;
      console.log("hello");
      vm.getPhdData();
    },
    async getPhdData() {
      //let url="http://birdboxdev.opsinno.cloud/api/aws/phd/694833324522"
      const vm = this;
      const ori =
        window.location.origin.indexOf("dev") != -1
          ? window.location.origin
          : vm.$root.endpoint;

      let url = `${ori}/api/aws/phd/694833324522/active`;
      //console.log(window.location.host)
      Axios.get(url).then((res) => {
        let tmp = [];
        res.data.forEach((elem) => {
          let eventDetail = elem["message"]; //JSON.parse(elem.message);
          console.log(eventDetail);
          tmp = tmp.concat({
            //service:eventDetail["detail"]["service"].substr(5),
            isActive: true,
            actionAt: eventDetail["time"],
            title: eventDetail["detail"]["eventTypeCode"].substr(4),
          });
        });
        this.notifications = tmp;
      });
    },
    routeIntoEventPage() {
      window.location.href = `${window.location.origin}/#/awsphd`;
    },
    async getGCPIncidentsData() {
      //let url="http://birdboxdev.opsinno.cloud/api/aws/phd/694833324522"
      const vm = this;
      const ori =
        window.location.origin.indexOf("dev") != -1
          ? window.location.origin
          : vm.$root.endpoint;

      let url = `${ori}/api/aws/phd/694833324522/active`;
      //console.log(window.location.host)
      Axios.get(url).then((res) => {
        let tmp = [];
        res.data.forEach((elem) => {
          let eventDetail = elem["message"]; //JSON.parse(elem.message);
          console.log(eventDetail);
          tmp = tmp.concat({
            //service:eventDetail["detail"]["service"].substr(5),
            isActive: true,
            actionAt: eventDetail["time"],
            title: eventDetail["detail"]["eventTypeCode"].substr(4),
          });
        });
        this.notifications = tmp;
      });
    },
    routeIntoGCPEventPage() {
      window.location.href = `${window.location.origin}/#/gcp/incident`;
    },
    navItemsMakeList() {
      this.searchList = []
      for ( var parentItemKey in this.nav) {
        if (this.nav[parentItemKey].route !== undefined && this.nav[parentItemKey].route !== '') {
          this.searchList.push({
            show: this.nav[parentItemKey].title,
            route: this.nav[parentItemKey].route,
            redirect: null,
          })
        }
        if (this.nav[parentItemKey].redirect !== undefined && this.nav[parentItemKey].redirect !== null) {
          this.searchList.push({
            show: this.nav[parentItemKey].title,
            route: '',
            redirect: this.nav[parentItemKey].redirect,
          })
        }
        if (this.nav[parentItemKey].child !== undefined && this.nav[parentItemKey].child.length > 0) {
          this.nav[parentItemKey].child.forEach(childItem => {
            if (childItem.route !== undefined && childItem.route !== '') {
              this.searchList.push({
                show: `${this.nav[parentItemKey].title} > ${childItem.title}`,
                route: childItem.route,
                redirect: null
              })
            }
            if (childItem.redirect !== undefined && childItem.redirect !== null) {
              this.searchList.push({
                show: `${this.nav[parentItemKey].title} > ${childItem.title}`,
                route: '',
                redirect: childItem.redirect
              })
            }
            if (childItem.child !== undefined && childItem.child.length > 0) {
              childItem.child.forEach(grandChildItem => {
                if (grandChildItem.route !== undefined && grandChildItem.route !== '') {
                  this.searchList.push({
                    show: `${this.nav[parentItemKey].title} > ${childItem.title} > ${grandChildItem.title}`,
                    route: grandChildItem.route,
                    redirect: null
                  })
                }
                if (grandChildItem.redirect !== undefined && grandChildItem.redirect !== null) {
                  this.searchList.push({
                    show: `${this.nav[parentItemKey].title} > ${childItem.title} > ${grandChildItem.title}`,
                    route: '',
                    redirect: grandChildItem.redirect
                  })
                }
              })
            }
          });
        }
      }
    },
    async clickSearchItem(value) {
      this.loading = true
      try {
        if (value.route !== undefined && value.route !== '') {
          await this.$router.push({ name: value.route })
        }
        if (value.redirect !== undefined && value.redirect !== null) {
          await window.open(value.redirect)
        }
      } catch (error) {
        console.log('check route or redirect')
      }
      finally {
        setTimeout(() => {
          this.selectedValue = null
          this.loading = false
        }, 1150);
      }
    }
  },
};
</script>

<style>
.wrap-text {
  word-wrap: break-word;
  -webkit-line-clamp: unset !important;
}
</style>