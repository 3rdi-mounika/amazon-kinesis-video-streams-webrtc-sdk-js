$('#start-broadcast').click(async () => {
    ROLE = 'master';
    // $('#form').addClass('d-none');
    $('#master').removeClass('d-none');
    $('#master-col').removeClass('d-none');

    const localView = $('#master .local-view')[0];
    const remoteView = $('#master .remote-view')[0];
    // const localMessage = $('#master .local-message')[0];
    const remoteMessage = $('#master .remote-message')[0];
    const formValues = getFormValues();
    console.log(formValues);

    $(remoteMessage).empty();
    // localMessage.value = '';
    toggleDataChannelElements();

    startMaster(localView, remoteView, formValues, onStatsReport, event => {
        remoteMessage.append(`${event.data}\n`);
    });
});

$('#stop-master-button').click(onStop);

$('#join-broadcast').click(async () => {
    ROLE = 'viewer';
    $('#form').addClass('d-none');
    $('#master').removeClass('d-none');
    $('#viewer-col').removeClass('d-none');

    const localView = $('#viewer .local-view')[0];
    const remoteView = $('#viewer .remote-view')[0];
    const localMessage = $('#viewer .local-message')[0];
    const remoteMessage = $('#viewer .remote-message')[0];
    const formValues = getFormValues();

    $(remoteMessage).empty();
    // localMessage.value = '';
    toggleDataChannelElements();

    startViewer(localView, remoteView, formValues, onStatsReport, event => {
        remoteMessage.append(`${event.data}\n`);
    });
});
$('#stop-viewer-button').click(onStop);


function getFormValues() {
    return {
        region: "ap-south-1",
        channelName: $('#channelName').val(),
        clientId: $('#clientId').val() || getRandomClientId(),
        sendVideo: true,
        sendAudio: true,
        openDataChannel: false,
        widescreen: true,
        fullscreen: false,
        useTrickleICE: true,
        natTraversalDisabled:false,
        forceTURN: false,
        accessKeyId: "AKIAW2QDQW454F4GULUR",
        endpoint: $('#endpoint').val() || null,
        secretAccessKey: "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",
        sessionToken: $('#sessionToken').val() || null,
    };
}




