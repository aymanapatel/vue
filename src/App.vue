<template>
  <div class="app-shell">
    <aside class="sidebar" aria-label="Assignments">
      <div class="sidebar-heading">Assignments</div>
      <nav class="assignment-nav">
        <RouterLink class="assignment-link" active-class="is-active" to="/directives">
          Directives
        </RouterLink>
        <div class="nav-group">
          <div class="nav-group-label">Events</div>
          <RouterLink class="assignment-link" active-class="is-active" to="/events/options">
            Options API
          </RouterLink>
          <RouterLink class="assignment-link" active-class="is-active" to="/events/composition">
            Composition API
          </RouterLink>
        </div>
        <RouterLink class="assignment-link" active-class="is-active" to="/watch-computed">
          Watch vs computed
        </RouterLink>
      </nav>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  display: grid;
  grid-template-columns: 224px minmax(0, 1fr);
  flex: 1;
  min-height: 100%;
  text-align: left;
}

.sidebar {
  border-right: 1px solid var(--border);
  padding: 32px 16px;
}

.sidebar-heading {
  color: var(--text-h);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0 12px 18px;
  text-transform: uppercase;
}

.assignment-nav,
.nav-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-group {
  margin: 12px 0;
}

.nav-group-label {
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
  margin: 0 12px 4px;
}

.assignment-link {
  border-left: 3px solid transparent;
  border-radius: 0 6px 6px 0;
  color: var(--text);
  display: block;
  font-size: 15px;
  line-height: 1.3;
  padding: 10px 12px;
  text-decoration: none;
  transition: background 150ms ease, border-color 150ms ease, color 150ms ease;
}

.assignment-link:hover {
  background: var(--accent-bg);
  color: var(--text-h);
}

.assignment-link.is-active {
  background: var(--accent-bg);
  border-left-color: var(--accent);
  color: var(--text-h);
  font-weight: 700;
}

.assignment-link:focus-visible {
  outline: 3px solid var(--accent-border);
  outline-offset: 2px;
}

.content {
  min-width: 0;
  overflow-x: auto;
  padding: 0 clamp(24px, 5vw, 72px);
  text-align: left;
}

@media (max-width: 720px) {
  .app-shell {
    display: block;
  }

  .sidebar {
    border-bottom: 1px solid var(--border);
    border-right: 0;
    padding: 14px 16px 12px;
  }

  .sidebar-heading {
    margin: 0 4px 10px;
  }

  .assignment-nav {
    align-items: stretch;
    flex-direction: row;
    gap: 6px;
    overflow-x: auto;
    padding: 2px 4px 5px;
    scrollbar-width: thin;
  }

  .nav-group {
    align-items: stretch;
    flex-direction: row;
    gap: 6px;
    margin: 0;
  }

  .nav-group-label {
    align-items: center;
    display: flex;
    margin: 0 2px 0 8px;
    white-space: nowrap;
  }

  .assignment-link {
    border: 1px solid var(--border);
    border-radius: 6px;
    flex: 0 0 auto;
    padding: 8px 11px;
    white-space: nowrap;
  }

  .assignment-link.is-active {
    border-color: var(--accent);
  }

  .content {
    padding: 0 20px;
  }
}
</style>
