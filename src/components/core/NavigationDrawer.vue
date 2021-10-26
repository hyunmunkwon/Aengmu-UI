<template>
  <v-navigation-drawer v-model="toggle" fixed app>
    <!-- 상단 화면  -->
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Home' }">
        <img src="static/birdbox.png" :width="toolbarHeight" />
      </router-link>
      <router-link :to="{ name: 'Home' }" class="text">BirdBox</router-link>
    </v-toolbar>

    <!-- Navigation Bar 시작  -->
    <v-card class="list-card" :height="listCardHeight" elevation="0">
      <v-list>
        <v-list-tile @click="changeRoute(nav['home'].route, nav['home']._id)">
          <v-list-tile-action>
            <v-icon>{{nav['home'].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === nav['home']._id }, 'item-title']"
          >
            {{ nav['home'].title }}
          </v-list-tile-title>
        </v-list-tile>
        <v-divider />

        <!-- Dashboard PART -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>{{nav['dashboard'].icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">{{nav['dashboard'].title}}</v-list-tile-title>
          </v-list-tile>
          <v-menu v-for="childItem in nav['dashboard'].child"
            :key="childItem._id"
            :nudge-width="20" offset-x
          >
            <template v-slot:activator="{}">
              <v-list-tile
                class="sub-item"
                @click="changeRoute(childItem.route, childItem._id)"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{ childItem.title }}</v-list-tile-title
                >
              </v-list-tile>
            </template>
          </v-menu>
        </v-list-group>

        <!-- Customer Service PART -->
        <v-list-tile @click="changeRoute(nav['customService'].route , nav['customService']._id)">
            <v-list-tile-action>
              <v-icon>{{ nav['customService'].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title
              :class="[{ active: selectedIndex === nav['customService']._id }, 'item-title']"
              >{{nav['customService'].title}}</v-list-tile-title
            >
        </v-list-tile>

        <!-- Backup Status PART -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>{{nav['backupStatus'].icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">{{nav['backupStatus'].title}}</v-list-tile-title>
          </v-list-tile>
          <v-menu v-for="childItem in nav['backupStatus'].child"
            :key="childItem._id"
            :nudge-width="20" offset-x
          >
            <template v-slot:activator="{}">
              <v-list-tile
                class="sub-item"
                @click="changeRoute(childItem.route, childItem._id)"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{ childItem.title }}</v-list-tile-title
                >
              </v-list-tile>
            </template>
          </v-menu>
        </v-list-group>

        <v-divider />

        <!-- Encloud PART -->
        <v-list-tile @click="changeRoute(nav['encloud'].route, nav['encloud'].id)">
          <v-list-tile-action>
            <v-icon>{{nav['encloud'].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === nav['encloud']._id }, 'item-title']"
            >{{nav['encloud'].title}}</v-list-tile-title
          >
        </v-list-tile>

        <!-- AWS PART -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>{{nav['aws'].icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">{{nav['aws'].title}}</v-list-tile-title>
          </v-list-tile>
          <v-menu v-for="childItem in nav['aws'].child"
            :key="childItem._id"
            :nudge-width="20" offset-x
          >
            <template v-slot:activator="{ on }">
              <v-list-tile
                v-if="childItem.redirect === null"
                class="sub-item"
                v-on="on"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{ childItem.title }}</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
              <v-list-tile
                v-if="childItem.redirect !== null"
                class="sub-item"
                v-on="on"
                @click="openWindow(childItem.redirect)"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{childItem.title}}</v-list-tile-title
                >
                <v-list-tile-action class="sub-item">
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile v-for="grandChildItem in childItem.child"
                :key="grandChildItem._id"
                @click="changeRoute(grandChildItem.route, grandChildItem._id)"
              >
                <v-list-tile-title
                  :class="[{ active: selectedIndex === grandChildItem._id }, 'item-title']"
                  >{{grandChildItem.title}}</v-list-tile-title
                >
                <v-list-tile-action
                  v-if="grandChildItem.child.length > 0"
                  class="sub-item"
                >
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <div
              v-for="grandChildItem in childItem.child"
              :key="grandChildItem._id"
            >
              <v-list
                v-for="item in grandChildItem.child"
                :key="item._id"
                :class="['item-title-2']"
              >
                <v-list-tile @click="changeRoute(item.route, item._id)">
                  <v-list-tile-title
                    :class="[{ active: selectedIndex === item._id }, 'item-title-3']"
                    >{{item.title}}</v-list-tile-title
                  >
                </v-list-tile>
              </v-list>
            </div>
          </v-menu>
        </v-list-group>


        <!-- Google Cloud -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>{{nav['gcp'].icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">{{nav['gcp'].title}}</v-list-tile-title>
          </v-list-tile>
          <v-menu v-for="childItem in nav['gcp'].child"
            :key="childItem._id"
            :nudge-width="20" offset-x
          >
            <template v-slot:activator="{ on }">
              <v-list-tile
                v-if="childItem.redirect === null"
                class="sub-item"
                v-on="on"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{ childItem.title }}</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
              <v-list-tile
                v-if="childItem.redirect !== null"
                class="sub-item"
                v-on="on"
                @click="openWindow(childItem.redirect)"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{childItem.title}}</v-list-tile-title
                >
                <v-list-tile-action class="sub-item">
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile v-for="grandChildItem in childItem.child"
                :key="grandChildItem._id"
                @click="changeRoute(grandChildItem.route, grandChildItem._id)"
              >
                <v-list-tile-title
                  :class="[{ active: selectedIndex === grandChildItem._id }, 'item-title']"
                  >{{grandChildItem.title}}</v-list-tile-title
                >
                <v-list-tile-action
                  v-if="grandChildItem.child.length > 0"
                  class="sub-item"
                >
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <div
              v-for="grandChildItem in childItem.child"
              :key="grandChildItem._id"
            >
              <v-list
                v-for="item in grandChildItem.child"
                :key="item._id"
                :class="['item-title-2']"
              >
                <v-list-tile @click="changeRoute(item.route, item._id)">
                  <v-list-tile-title
                    :class="[{ active: selectedIndex === item._id }, 'item-title-3']"
                    >{{item.title}}</v-list-tile-title
                  >
                </v-list-tile>
              </v-list>
            </div>
          </v-menu>
        </v-list-group>

        <!-- Azure -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>{{nav['azure'].icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">{{nav['azure'].title}}</v-list-tile-title>
          </v-list-tile>
          <v-menu v-for="childItem in nav['azure'].child"
            :key="childItem._id"
            :nudge-width="20" offset-x
          >
            <template v-slot:activator="{ on }">
              <v-list-tile
                v-if="childItem.redirect === null"
                class="sub-item"
                v-on="on"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{ childItem.title }}</v-list-tile-title
                >
                <v-list-tile-action class="sub-item"> > </v-list-tile-action>
              </v-list-tile>
              <v-list-tile
                v-if="childItem.redirect !== null"
                class="sub-item"
                v-on="on"
                @click="openWindow(childItem.redirect)"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{childItem.title}}</v-list-tile-title
                >
                <v-list-tile-action class="sub-item">
                  <v-icon>open_in_new</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
            <v-list>
              <v-list-tile v-for="grandChildItem in childItem.child"
                :key="grandChildItem._id"
                @click="changeRoute(grandChildItem.route, grandChildItem._id)"
              >
                <v-list-tile-title
                  :class="[{ active: selectedIndex === grandChildItem._id }, 'item-title']"
                  >{{grandChildItem.title}}</v-list-tile-title
                >
                <v-list-tile-action
                  v-if="grandChildItem.child.length > 0"
                  class="sub-item"
                >
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <div
              v-for="grandChildItem in childItem.child"
              :key="grandChildItem._id"
            >
              <v-list
                v-for="item in grandChildItem.child"
                :key="item._id"
                :class="['item-title-2']"
              >
                <v-list-tile @click="changeRoute(item.route, item._id)">
                  <v-list-tile-title
                    :class="[{ active: selectedIndex === item._id }, 'item-title-3']"
                    >{{item.title}}</v-list-tile-title
                  >
                </v-list-tile>
              </v-list>
            </div>
          </v-menu>
        </v-list-group>

        <!-- Terraform Portal PART -->
        <v-list-tile @click="changeRoute(nav['terraformPotal'].route, nav['terraformPotal'].id)">
          <v-list-tile-action>
            <v-icon>{{nav['terraformPotal'].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === nav['terraformPotal']._id }, 'item-title']"
            >{{nav['terraformPotal'].title}}</v-list-tile-title
          >
        </v-list-tile>

        <!-- <v-list-tile @click="changeRoute('Jmon', 25)">
          <v-list-tile-action>
            <v-icon>insert_chart_outlined</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 25 }, 'item-title']"
            >i-WMS</v-list-tile-title
          >
        </v-list-tile> -->

        <!-- Cost Calculator PART -->
        <v-list-tile @click="changeRoute(nav['costCalculator'].route, nav['costCalculator'].id)">
          <v-list-tile-action>
            <v-icon>{{nav['costCalculator'].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === nav['costCalculator']._id }, 'item-title']"
            >{{nav['costCalculator'].title}}</v-list-tile-title
          >
        </v-list-tile>

        <!-- <v-list-tile @click="changeRoute('SystemAdministratorList', 27)">
          <v-list-tile-action>
            <v-icon>perm_contact_calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === 27 }, 'item-title']"
            >System Administrator</v-list-tile-title
          >
        </v-list-tile> -->

        <v-divider />

        <!-- Earlybird PART -->
        <v-list-tile @click="changeRoute(nav['earlyBird'].route, nav['earlyBird'].id)">
          <v-list-tile-action>
            <v-icon>{{nav['earlyBird'].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === nav['earlyBird']._id }, 'item-title']"
            >{{nav['earlyBird'].title}}</v-list-tile-title
          >
        </v-list-tile>

        <!-- Paperbird PART -->
        <v-list-tile
          @click="openWindow(nav['paperBird'].redirect)"
        >
          <v-list-tile-action>
            <v-icon>{{nav['paperBird'].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === nav['paperBird']._id }, 'item-title']"
            >{{nav['paperBird'].title}}</v-list-tile-title
          >
          <v-list-tile-action class="sub-item">
            <v-icon>open_in_new</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider />

        <!-- <v-list-group prepend-icon="account_circle">
          <v-list-tile slot="activator">
            <v-list-tile-title class="item-title">Users</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="(admin, i) in admins" :key="i">
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
          </v-list-tile>
        </v-list-group> -->

        <!-- System Administrator -->
        <v-list-tile @click="changeRoute(nav['systemAdministrator'].route, nav['systemAdministrator'].id)">
          <v-list-tile-action>
            <v-icon>{{nav['systemAdministrator'].icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :class="[{ active: selectedIndex === nav['systemAdministrator']._id }, 'item-title']"
            >{{nav['systemAdministrator'].title}}</v-list-tile-title
          >
        </v-list-tile>


        <!-- Users PART -->
        <v-list-group>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>{{nav['users'].icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">{{nav['users'].title}}</v-list-tile-title>
          </v-list-tile>
          <v-menu v-for="childItem in nav['users'].child"
            :key="childItem._id"
            :nudge-width="20" offset-x
          >
            <template v-slot:activator="{}">
              <v-list-tile
                v-if="childItem.redirect === null"
                class="sub-item"
              >
                <v-list-tile-action>
                  <v-icon>{{childItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title
                  :class="[{ active: selectedIndex === childItem._id }, 'item-title']"
                  >{{ childItem.title }}</v-list-tile-title
                >
              </v-list-tile>
            </template>
          </v-menu>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import navItems from './NavigationItems'

export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      selectedIndex: 1,
      toolbarHeight: 50,
      nav: navItems
    };
  },

  computed: {
    listCardHeight() {
      return this.$vuetify.breakpoint.height - this.toolbarHeight - 20
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    },
    openWindow(url) {
      window.open(url);
    },
  },
};
</script>

<style>
i {
  font-size: 22px;
}

.toolbar {
  font-weight: bold;
  font-size: 35px;
}

.toolbar img {
  vertical-align: middle;
}

.list-card {
  overflow-y: scroll;
}

.toolbar .text {
  padding-left: 15px;
  color: white;
  text-decoration: none;
}

.item-title {
  font-size: 15px;
  font-weight: 500;
}

.item-title-2 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.item-title-3 {
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
}

.item-sub-title {
  font-size: 15px;
  font-weight: 500;
}

.active {
  font-weight: bold;
}

.sub-item {
  padding-left: 3em;
}

.v-list__tile__title {
    height: 24px;
    line-height: 24px;
    position: relative;
    margin-left: 10px;
    text-align: left;
}

.v-list__tile__action, .v-list__tile__avatar {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: start;
    justify-content: center;
    min-width: 50px;

}
</style>
