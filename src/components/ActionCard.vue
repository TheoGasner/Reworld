<template>
  <div class="action-card">
    <div class="action-icon">
      <component :is="iconComponent" />
    </div>
    <h3 class="action-title">{{ action.title }}</h3>
    <p class="action-desc">{{ action.description }}</p>
  </div>
</template>

<script>
import { computed, h } from 'vue'

export default {
  name: 'ActionCard',
  props: {
    action: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const icons = {
      grid: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z' })
      ]),
      layers: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' })
      ]),
      box: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }),
        h('polyline', { points: '3.27 6.96 12 12.01 20.73 6.96' }),
        h('line', { x1: '12', y1: '22.08', x2: '12', y2: '12' })
      ]),
      users: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
        h('circle', { cx: '9', cy: '7', r: '4' }),
        h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
        h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
      ]),
      'map-pin': () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
        h('circle', { cx: '12', cy: '10', r: '3' })
      ]),
      'file-text': () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
        h('polyline', { points: '14 2 14 8 20 8' }),
        h('line', { x1: '16', y1: '13', x2: '8', y2: '13' }),
        h('line', { x1: '16', y1: '17', x2: '8', y2: '17' })
      ]),
      smartphone: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
        h('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' })
      ]),
      coffee: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M18 8h1a4 4 0 0 1 0 8h-1' }),
        h('path', { d: 'M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' }),
        h('line', { x1: '6', y1: '1', x2: '6', y2: '4' }),
        h('line', { x1: '10', y1: '1', x2: '10', y2: '4' }),
        h('line', { x1: '14', y1: '1', x2: '14', y2: '4' })
      ]),
      smile: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('circle', { cx: '12', cy: '12', r: '10' }),
        h('path', { d: 'M8 14s1.5 2 4 2 4-2 4-2' }),
        h('line', { x1: '9', y1: '9', x2: '9.01', y2: '9' }),
        h('line', { x1: '15', y1: '9', x2: '15.01', y2: '9' })
      ]),
      tree: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z' }),
        h('circle', { cx: '12', cy: '10', r: '3' })
      ]),
      flower: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 2a10 10 0 0 0-7.35 16.76L12 22l7.35-3.24A10 10 0 0 0 12 2z' }),
        h('path', { d: 'M12 8v4l3 3' })
      ]),
      sun: () => h('svg', { viewBox: '0 0 24 24' }, [
        h('circle', { cx: '12', cy: '12', r: '5' }),
        h('line', { x1: '12', y1: '1', x2: '12', y2: '3' }),
        h('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
        h('line', { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
        h('line', { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
        h('line', { x1: '1', y1: '12', x2: '3', y2: '12' }),
        h('line', { x1: '21', y1: '12', x2: '23', y2: '12' }),
        h('line', { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
        h('line', { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' })
      ])
    }
    
    const iconComponent = computed(() => icons[props.action.icon] || icons.grid)
    
    return { iconComponent }
  }
}
</script>

<style scoped>
.action-card {
  background: linear-gradient(145deg, rgba(0, 201, 167, 0.1) 0%, rgba(0, 201, 167, 0.02) 100%);
  border: 1px solid rgba(0, 201, 167, 0.3);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 201, 167, 0.2);
}

.action-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #00C9A7, #00A8E8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-icon svg {
  width: 28px;
  height: 28px;
  stroke: #0A0A0A;
  stroke-width: 2;
  fill: none;
}

.action-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #FFFFFF;
}

.action-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}
</style>
