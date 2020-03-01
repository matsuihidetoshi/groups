<template>
  <div class="rank">
    <h1>Rank</h1>
    <div class="ranks-area">
      <div v-for="(rank, id) in ranks" v-bind:key="id">
        <div class="single-rank">
          <span v-if="(id == 0)">👑</span>
          <span v-else-if="(id == 1)">🥈</span>
          <span v-else-if="(id == 2)">🥉</span>
          {{ id + 1 }}位
          {{ rank.name }}<br>{{ rank.score }}
        </div>
      </div>
    </div>
    <div id="chat-form">
      <input type="text" v-model="name" name="name" class="form" placeholder="Content"><br/>
      <input type="number" step="0.01" v-model="score" name="score" class="form" placeholder="Score"><br/>
      <button class="submit" v-on:click="createRank()">Post</button>
    </div>
  </div>
</template>
<script>
import { API, graphqlOperation} from "aws-amplify"
import { createRank } from "../graphql/mutations"
import { listRanks } from "../graphql/queries"
import { getRank } from "../graphql/queries"
import { onCreateRank } from "../graphql/subscriptions"
import _ from 'lodash'

export default {
  name: 'Rank',
  data () {
    return {
      name: "",
      score: null,
      rank: null,
      ranks: [],
      owner: localStorage.getItem("CognitoIdentityServiceProvider.1lj20khom343b67ou6f3se7bg6.LastAuthUser"),
      limit: 2 ** 31 - 1
    }
  },
  mounted: function () {
    this.displayRanks()
  },
  methods: {
    createRank: async function () {
      if (this.name === "" || !this.score) return
      const rank = {name: this.name, score: this.score}
      try {
        this.name = ""
        this.score = ""
        await API.graphql(graphqlOperation(createRank, {input: rank}))
      } catch (error) {
        error
      }
    },
    displayRanks: async function () {
      let ranks = await API.graphql(graphqlOperation(
        listRanks, {limit: this.limit}
      ))
      this.ranks = _.orderBy(ranks.data.listRanks.items, 'score', 'desc').slice(0, 100)
      
      API.graphql(
        graphqlOperation(onCreateRank, {limit: this.limit, owner: this.owner})
      ).subscribe({
        next: (eventData) => {
          const rank = eventData.value.data.onCreateRank
          const ranks = [...this.ranks, rank]
          this.ranks = _.orderBy(ranks, 'score', 'desc').slice(0, 100)
        }
      })
    },
    singleRank: async function (selectedNote) {
      let rank = await API.graphql(graphqlOperation(
        getRank, {id: selectedNote.id}
      ))
      this.rank = rank
    }
  }
}
</script>
<style scoped>
  textarea {
    height: 80px;
  }
  .form {
    font-size: 20px;
    border: solid 1px gray;
    border-radius: 5px;
    width: 300px;
  }
  .submit {
    width: 300px;
    font-size: 20px;
    border-radius: 5px;
    vertical-align: top;
  }
  .ranks-area {
    width: 300px;
    height: 300px;
    display: inline-block;
    overflow: scroll;
  }
  .single-rank {
    padding: 10px 20px 10px 20px;
    background-color: #eeeeee;
    border-radius: 5px;
    margin: 10px 0 10px 0;
    overflow-wrap: break-word;
    white-space: pre-line;
  }
</style>