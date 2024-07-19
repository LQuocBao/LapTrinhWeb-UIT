class HocSinh {
    constructor(ten, tuoi, diemTrungBinh) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.diemTrungBinh = diemTrungBinh;
    }

    show() {
        console.log(`Tên: ${this.ten}`);
        console.log(`Tuổi: ${this.tuoi}`);
        console.log(`Điểm trung bình: ${this.diemTrungBinh}`);
    }
}
var hocSinh1 = new HocSinh("Lâm Quốc Bảo", 19, 8.5);

hocSinh1.show();
