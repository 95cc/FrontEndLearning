<script lang="jsx">
export default {
  render() {
    return (
      <div style="border: 1px solid #ddd; margin: 8px">
        <div>HelloWorld组件</div>
        {/* 这里编写的是注释，下面定义了 default 插槽 */}
        {this.$slots.default ? (
          this.$slots.default()
        ) : (
          <span>插槽的默认内容</span>
        )}
      </div>
    )
  },
}
</script>
