document.addEventListener('DOMContentLoaded', function () {
    const grid = new gridjs.Grid({
        columns: ['السلاح', 'النوع', 'الكمية', 'الحالة'],
        data: () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        ['صاروخ باتريوت', 'أرض-جو', Math.floor(Math.random() * 100), 'جاهز'],
                        ['نظام ثاد', 'دفاع صاروخي', Math.floor(Math.random() * 50), 'صيانة'],
                        ['مدفع رشاش', 'مضاد للطائرات', Math.floor(Math.random() * 500), 'جاهز'],
                        ['طائرة بدون طيار', 'استطلاع', Math.floor(Math.random() * 20), 'في مهمة']
                    ]);
                }, 1000);
            });
        },
        search: true,
        sort: true,
        pagination: true,
        language: {
            'search': {
                'placeholder': 'بحث...'
            },
            'pagination': {
                'previous': 'السابق',
                'next': 'التالي',
                'showing': 'عرض',
                'to': 'إلى',
                'of': 'من',
                'results': 'نتائج'
            }
        }
    }).render(document.getElementById('grid'));

    setInterval(() => {
        grid.updateConfig({
            data: () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve([
                            ['صاروخ باتريوت', 'أرض-جو', Math.floor(Math.random() * 100), 'جاهز'],
                            ['نظام ثاد', 'دفاع صاروخي', Math.floor(Math.random() * 50), 'صيانة'],
                            ['مدفع رشاش', 'مضاد للطائرات', Math.floor(Math.random() * 500), 'جاهز'],
                            ['طائرة بدون طيار', 'استطلاع', Math.floor(Math.random() * 20), 'في مهمة']
                        ]);
                    }, 1000);
                });
            }
        }).forceRender();
    }, 2000);

    document.getElementById('settings-btn').addEventListener('click', () => {
        alert('تم الضغط على زر الإعدادات');
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        alert('تم الضغط على زر التواصل');
    });
});
