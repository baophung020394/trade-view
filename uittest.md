# Import model

# singleton patterns

# vue instance = wrapper ( shallowMount )
# before each
1. Trước khi chạy unit Test thì chạy beforeEach trc
# cloneDeep copy Obj k ảnh hưởng bản gốc 
# test hàm puish xài push: jest.fn();
2. test router-link ( của thằng vue): phải sử dụng stubs ( mock component mặc định )
# vm là view-model ( ràng buộc dữ liệu trong component )
# mockRejectedValueOnce (có chữ Once thì dữ liệu chỉ thay đổi 1 lần k ảnh hưởng các it khác) - Lưu ý khi xài phải try catch
# wapper.vm k nên mock toàn cục vì mỗi nơi khác data nhau
# test mixin sử dụng localVue.mixin
# watch 

# backend muốn test function nào thì import function đó vào beforeEach
# mockImplementation: trả về params callback