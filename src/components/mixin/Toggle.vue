<script>
export default {
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggleShowing() {
      this.isShowing = !this.isShowing;
    }
  }
};
</script>