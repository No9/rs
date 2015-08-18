#[cfg(test)]
mod test {
extern crate rscalc;
    #[test]
    fn output_test() {
        assert!(6765 == rscalc::fibonacci(20));
    }
}