var learning_curves_lstm = c3.generate({
    bindto: '#learning_curves_lstm',
    data: {
        columns: [
            //['data1', 30, 200, 100, 400, 150, 250],
            ['LSTM train', 3.489865396,	3.22163,	2.390079695,	2.524776941,	2.329336148,	2.248706664,	2.43182707,	2.280884616,	2.123046775,	2.459979986,	2.319613138,	1.822016825,	1.844814995,	2.291270966,	2.291291163],
            ['LSTM dev', 3.523443,	2.2353,	2.14231,	1.824007845,	1.772631474,	1.75341835,	1.819950369,	1.799507471,	1.775930744,	1.806362155,	1.764691063,	1.746147413,	2.161853705,	1.825484449,	1.835357798],
            //['data2', 50, 20, 10, 40, 15, 25]
            ['BLSTM train',3.491939512,	2.31145708,	2.317210796,	2.257833283,	2.169694294,	2.156617999,	2.163341551,	2.178355595,	2.068938279,	2.398258786,	2.357379142,	2.357379142,	2.2234323,	2.123343,	2.245654],
            ['BLSTM dev',3.5,	2.4,	1.760742987,	1.714647744,	1.747503439,	1.703870105,	1.750210798,	1.784341734,	1.729885736,	1.821028842,	1.860049602,	1.8256343,
             2.0,	2.1,	2.3],
        ]
    }
});

