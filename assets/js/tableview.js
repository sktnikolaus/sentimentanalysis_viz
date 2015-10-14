var chart = c3.generate({
    bindto:'#tableview',
    data: {
        x : 'x',
        columns: [
            ['x','Camera 1','Camera 2','Camera 3','Camera 4','Camera 5','Camera 6'],
            ['Picture', 30, -50, -10, 40, 15, 25],
            ['Prize', -50, 15, -15, 15, -50, -10],
            ['Battery', -10, 90, -40, 20, -10, -50],
            ['Portability', -10, 100, -40, 10, -10, -50],
            ['Features', -100, 10, -40, 100, -10, -50]
        ],
        groups: [
            ['data1', 'data2']
        ],
        type: 'bar',
        labels: true
    },
    axis: {
        x: {
            type: 'category' // this needed to load string x value
        }
    }
    
});