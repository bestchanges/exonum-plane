<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <h1>Block {{ height }}</h1>

          <h2 class="mt-5">Transactions</h2>
          <ul class="list-group mt-3">
            <li class="list-group-item font-weight-bold">
              <div class="row">
                <div class="col-sm-12">Hash</div>
              </div>
            </li>
            <li v-for="transaction in transactions" class="list-group-item">
              <div class="row">
                <div class="col-sm-12">
                  <router-link :to="{ name: 'transaction', params: { hash: transaction } }">{{ transaction }}</router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <spinner :visible="isSpinnerVisible"/>
  </div>
</template>

<script>
  import Spinner from '../components/Spinner.vue'

  module.exports = {
    components: {
      Spinner
    },
    props: {
      height: String
    },
    data() {
      return {
        transactions: [],
        isSpinnerVisible: false
      }
    },
    methods: {
      async loadBlock() {
        this.isSpinnerVisible = true

        try {
          const data = await this.$blockchain.getBlock(this.height)
          this.transactions = data.txs
          this.isSpinnerVisible = false
        } catch (error) {
          this.isSpinnerVisible = false
          this.$notify('error', error.toString())
        }
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.loadBlock()
      })
    }
  }
</script>
