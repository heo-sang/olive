const meetingStore = {
  namespaced: true,
  state: {
    sessionId: 'TEST',
    myPublisher: {
      audioSource: undefined, // The source of audio. If undefined default microphone
      videoSource: undefined, // The source of video. If undefined default webcam
      publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
      publishVideo: true, // Whether you want to start publishing with your video enabled or not
      resolution: '500x375', // The resolution of your video
      frameRate: 30, // The frame rate of your video
      insertMode: 'APPEND', // How the video is inserted in the target element 'video-container'
      mirror: false // Whether to mirror your local video or not}
    },
    opponentInfo: {},
    isMatched: false
  },
  getters: {},
  mutations: {
    SET_SESSIONID(state, payload) {
      state.sessionId = payload
    },
    SET_PUBLISHER(state, payload) {
      state.myPublisher.audioSource = payload.audioSource
      state.myPublisher.videoSource = payload.videoSource
      state.myPublisher.publishAudio = payload.publishAudio
      state.myPublisher.publishVideo = payload.publishVideo
    },
    SET_OPPONENT_INFO(state, payload) {
      state.opponentInfo = payload
    },
    SET_IS_MATCHED(state, payload) {
      state.isMatched = payload
    }
  },
  actions: {
    setSessionId({ commit }, payload) {
      commit('SET_SESSIONID', payload)
    },
    setPublisher({ commit }, payload) {
      commit('SET_PUBLISHER', payload)
    },
    setOpponentInfo({ commit }, payload) {
      commit('SET_OPPONENT_INFO', payload)
    },
    setIsMatched({ commit }, payload) {
      commit('SET_IS_MATCHED', payload)
    }
  }
}

export default meetingStore
