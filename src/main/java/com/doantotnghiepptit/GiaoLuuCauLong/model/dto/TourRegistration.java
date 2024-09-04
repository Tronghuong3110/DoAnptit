package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TourRegistration {
    private Long id;
    private Boolean status;
    private LocalDateTime modifiedAt;
    private LocalDateTime registerAt;

}
