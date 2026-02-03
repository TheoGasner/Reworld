<template>
  <div class="share-section">
    <p class="share-title">Partagez cette vision du futur</p>
    <div class="share-buttons">
      <button class="share-btn" @click="shareOnTwitter" aria-label="Partager sur Twitter">
        <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
      </button>
      <button class="share-btn" @click="shareOnFacebook" aria-label="Partager sur Facebook">
        <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </button>
      <button class="share-btn" @click="shareOnLinkedIn" aria-label="Partager sur LinkedIn">
        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </button>
      <button class="share-btn" @click="copyLink" aria-label="Copier le lien">
        <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareSection',
  setup() {
    const shareOnTwitter = () => {
      const text = encodeURIComponent('Je viens de découvrir une vision du futur avec REWORLD ! 🌍✨ #REWORLD #FuturDésirable')
      const url = encodeURIComponent(window.location.href)
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
    }

    const shareOnFacebook = () => {
      const url = encodeURIComponent(window.location.href)
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
    }

    const shareOnLinkedIn = () => {
      const url = encodeURIComponent(window.location.href)
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
    }

    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Lien copié !')
      } catch (err) {
        console.error('Erreur lors de la copie:', err)
      }
    }

    return {
      shareOnTwitter,
      shareOnFacebook,
      shareOnLinkedIn,
      copyLink
    }
  }
}
</script>

<style scoped>
.share-section {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.share-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.share-btn {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.share-btn:hover {
  background: #00C9A7;
  transform: scale(1.1);
}

.share-btn svg {
  width: 20px;
  height: 20px;
  fill: #FFFFFF;
}

.share-btn:hover svg {
  fill: #0A0A0A;
}
</style>
